import {useState} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import {createEvent} from "../../services/events";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faTag }from '@fortawesome/free-solid-svg-icons';

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
      <div className="mb-6">
        <input
          {...register("eventName",
            {required: true})}
          aria-invalid={errors.eventName ? "true" : "false"}
          placeholder="Event name"
          className="text-xl text-sky-500  bg-zinc-50 py-2 border-0 outline-none border-solid border-b border-gray-400 hover:border-b-2"
        />
        {errors.eventName?.type === "required" && (
          <p role="alert" className="text-red-500">Event name is required</p>
        )}
      </div>
      <div className="m-4">
        <label className="p-2">Start time:</label>
        <input
          type="time"
          {...register("startDate",
            {required: true})}
          aria-invalid={errors.startDate ? "true" : "false"}
        />
        {errors.startDate?.type === "required" && (
          <p role="alert" className="text-red-500">Initial hour is required </p>
        )}
      </div>
      <div className="m-4">
        <label className="p-2">End time:</label>
        <input
          type="time"
          {...register("endDate",
            {required: true})}
          aria-invalid={errors.endDate ? "true" : "false"}
        />
        {errors.endDate?.type === "required" && (
          <p role="alert" className="text-red-500">End hour is required</p>
        )}
      </div>
      <div className="my-6">
        <label><FontAwesomeIcon icon={faLocationDot}  className="px-2 text-sky-500"/></label>
        <input
          {...register("location",
            {required: true})}
          aria-invalid={errors.location ? "true" : "false"}
          placeholder="Location"
        />
        {errors.location?.type === "required" && (
          <p role="alert" className="text-red-500">Location is required</p>
        )}
      </div>
      <div className="my-6">
        <label><FontAwesomeIcon icon={faTag} className="px-2 text-sky-500"/></label>
        <input
          {...register("label",
            {required: true})}
          aria-invalid={errors.label ? "true" : "false"}
          placeholder="Label"
        />
        {errors.label?.type === "required" && (
          <p role="alert" className="text-red-500">Label is required </p>
        )}
      </div>
      <div className="mt-8">
        <input
          type="submit"
          value="Save"
          className="cursor-pointer hover:bg-zinc-800 bg-zinc-600 text-neutral-50 py-2.5 px-5 rounded-md"
        />
      </div>
    </form>
  )
}