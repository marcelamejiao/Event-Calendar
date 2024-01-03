import {useState} from "react";
import {Modal} from "../Modal/Modal";

const EventCard = () => {
    const [showModal, setShowModal] = useState(false);



    return (
        <div className="bg-sky-50"
            onClick={() => setShowModal(true)}>
            <p>Name:</p>
            <p>Start time:</p>
            <p>End time:</p>

            {showModal && (
                <Modal
                setShowModal={() => setShowModal(false)}
                />
            )}
        </div>
    )
}

export default EventCard;