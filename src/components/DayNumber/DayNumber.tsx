import { useState } from "react";
import CalendarCell from "../CalendarCell/CalendarCell";
import EventTag from "../EventTag/EventTag";
import {Modal} from "../Modal/Modal";
import CalendarEvent from "../../models/event";

interface Props {
  numberOfDays: number;
  initialPositionOfDay: number;
  currentDate: Date;
  events: CalendarEvent[];
}

const DayNumber = ({ numberOfDays, initialPositionOfDay, currentDate, events }: Props) => {
  const [showDayModal, setShowDayModal] = useState(0);

  const dayNumberOfWeek: number[] = Array.from(
    {length: numberOfDays},
    (_, index) => index + 1
  );

  // where in the week the day is positionated
  const positionOfDayWeek: number[] = Array.from(
    {length: initialPositionOfDay},
    (_, index) => index
  );

  // Get the events of each day of the month
  const getEventsByDay = (day: number): CalendarEvent[] => {
    return events.filter((event) => {
      return event.startDate.getDay() === day
    })
  }

  return (
    <div className="flex flex-wrap text-center w-[35rem]">
      {positionOfDayWeek.map((day) => (
        <CalendarCell
          key={day}
          className="text-sm border-t w-[5rem] p-2">
          {}
        </CalendarCell>
      ))}

      {dayNumberOfWeek.map((day) => (
        <CalendarCell
          key={day}
          className="text-sm border-t w-[5rem] p-2">
            <div>
              {day}
              <button onClick={() => setShowDayModal(day)}>+</button>
            </div>
            <EventTag
              event={event}
            />
        </CalendarCell>
      ))}

      {showDayModal !== 0 && (
        <Modal
          day={showDayModal}
          setHideModal={() => setShowDayModal(0)}
          currentDate={currentDate}
        />
      )}
    </div>
  )
}

export default DayNumber;