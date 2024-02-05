import AddEventForm from "../AddEventForm/AddEventForm";

type modalProps = {
  setHideModal(): void,
  currentDate: Date,
  day: number;
};

export const Modal = ({ setHideModal, currentDate, day }: modalProps) => {
  return (
    <div className="inset-0 fixed bg-gradient-to-br from-gray-900 z-10 flex justify-center items-center overflow-y-hidden">
      <div className="rounded-md flex flex-col drop-shadow-lg bg-zinc-50 items-center justify-center p-14">
        <div>
          <button className="rounded-full py-2 px-4 mb-8 bg-zinc-600 hover:bg-zinc-800 text-neutral-50"onClick={setHideModal}>x</button>
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