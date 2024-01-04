import AddEventForm from "../AddEventForm/AddEventForm";

type modalProps = {
  setHideModal(): void,
  currentDate: Date,
  day: number;
};

export const Modal = ({ setHideModal, currentDate, day }: modalProps) => {
  return (
    <div className="inset-0 fixed bg-gray-100 opacity-80 z-10 flex justify-center items-center overflow-y-hidden">
      <div className="w-50 flex flex-col bg-neutral-50 items-center justify-center p-5 ">
        <div>
          <button onClick={setHideModal}>x</button>
        </div>
        <AddEventForm
          setHideModal={setHideModal}
          currentDate={currentDate}
          day={day}
        />
      </div>
    </div>
  )
}