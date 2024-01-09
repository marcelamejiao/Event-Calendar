import CalendarEvent from "../../models/event";

type Props = {
    event: CalendarEvent;
}

const EventTag = ({ event }: Props) => {
    
    return (
        <div className="bg-sky-50">
            <p>Name: {event.eventName}</p>
        </div>
    )
}

export default EventTag;