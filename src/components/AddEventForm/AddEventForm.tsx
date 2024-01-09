import {useState} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import {createEvent} from "../../services/events";

type IFormProps = {
  setHideModal(showModal: boolean): void,
  currentDate: Date,
  day: number,
};

export type IFormValues = {
  eventName: string
  startDate: string
  endDate: string
  location: string
  label: string
};

export default function AddEventForm({ setHideModal, currentDate, day }: IFormProps) {
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<IFormValues>()
   
  const onSubmit: SubmitHandler<IFormValues> = async (data, e) => {
    e.preventDefault();
    try {
      if (error) {
        setError(false);
      }

      // Get the actual date yyyy/mm/dd
      const actualYear = currentDate.getFullYear();
      const actualMonth = currentDate.getMonth();

      // Get the start date
      const startEventDate = new Date();
      startEventDate.setHours(Number(data.startDate.split(":")[0]));
      startEventDate.setMinutes(Number(data.startDate.split(":")[1]));
      startEventDate.setFullYear(actualYear);
      startEventDate.setMonth(actualMonth);
      startEventDate.setDate(day);

      // Get the end date
      const endEventDate = new Date();
      endEventDate.setHours(Number(data.endDate.split(":")[0]));
      endEventDate.setMinutes(Number(data.endDate.split(":")[1]));
      endEventDate.setFullYear(actualYear);
      endEventDate.setMonth(actualMonth);
      endEventDate.setDate(day);

      // Convert time format to JSON format
      const eventData = {...data};
      eventData.startDate = startEventDate.toJSON();
      eventData.endDate = endEventDate.toJSON();
      
      await createEvent(eventData);
      setHideModal(false);
    } catch (e) {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Create a new event</h2>
      <div>
        <label>Event's name:</label>
        <input
          {...register("eventName",
            {required: true})}
          aria-invalid={errors.eventName ? "true" : "false"}
        />
        {errors.eventName?.type === "required" && (
          <p
            role="alert">Event name is required
          </p>
        )}
      </div>
      <div>
        <label>Start time:</label>
        <input
          type="time"
          {...register("startDate",
            {required: true})}
          aria-invalid={errors.startDate ? "true" : "false"}
        />
        {errors.startDate?.type === "required" && (
          <p
            role="alert">Initial hour is required
          </p>
        )}
      </div>
      <div>
        <label>End time:</label>
        <input
          type="time"
          {...register("endDate",
            {required: true})}
          aria-invalid={errors.endDate ? "true" : "false"}
        />
        {errors.endDate?.type === "required" && (
          <p
            role="alert">End hour is required
          </p>
        )}
      </div>
      <div>
        <label>Location:</label>
        <input
          {...register("location",
            {required: true})}
          aria-invalid={errors.location ? "true" : "false"}
        />
        {errors.location?.type === "required" && (
          <p
            role="alert">Location is required
          </p>
        )}
      </div>
      <div>
        <label>Label:</label>
        <input
          {...register("label",
            {required: true})}
          aria-invalid={errors.label ? "true" : "false"}
        />
        {errors.label?.type === "required" && (
          <p
            role="alert">Label is required
          </p>
        )}
      </div>
      <div>
        <input
          type="submit"
          value="Save"
        />
      </div>
    </form>
  )
}