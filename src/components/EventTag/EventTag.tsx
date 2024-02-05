import CalendarEvent from "../../models/event";

type Props = {
    event: CalendarEvent;
}

const EventTag = ({ event }: Props) => {
    
    return (
        <div className="bg-teal-500 rounded-sm text-xs text-white mt-1">
            <p>{event.eventName}</p>
        </div>
    )
}

export default EventTag;