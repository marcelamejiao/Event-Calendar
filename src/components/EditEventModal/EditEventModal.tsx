import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan }from '@fortawesome/free-solid-svg-icons';
import CalendarEvent from "../../models/event";
import EditEventForm from "../EditEventForm/EditEventForm";
import { deleteEvent } from "../../services/events";

type modalProps = {
  closeModal(): void,
  currentDate: Date,
  setAdded: (added: number) => void;
  added: number;
  event: CalendarEvent;
};

const EditEventModal = ({ closeModal, currentDate, setAdded, added, event }: modalProps) => {
  
  const handleRemove = async () => {
    try {
        await deleteEvent(event.id)
        setAdded(added + 1);
        closeModal();
    } catch (e: any) {
        console.log(e.message)
    }
}
  return (
    <div className="inset-0 fixed bg-gradient-to-br from-gray-900 z-10 flex justify-center items-center overflow-y-hidden">
      <div className="rounded-md flex flex-col drop-shadow-lg bg-zinc-50 items-center justify-center p-14">
        <div>
          <button className="rounded-full py-2 px-4 mb-8 bg-zinc-600 hover:bg-zinc-800 text-neutral-50" onClick={closeModal}>x</button>
        </div>
        <FontAwesomeIcon
          onClick={handleRemove} 
          icon={faTrashCan} 
          className="text-red-500 hover:text-red-600 cursor-pointer rounded-full bg-white hover:bg-red-200 py-4 px-4"
        />
        <EditEventForm
          closeModal={closeModal}
          currentDate={currentDate}
          setAdded={setAdded}
          added={added}
          event={event}
        />
      </div>
    </div>
  )
}

export default EditEventModal;