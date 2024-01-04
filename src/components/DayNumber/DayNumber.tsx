import { useState } from "react";
import CalendarCell from "../CalendarCell/CalendarCell";
import EventCard from "../EventCard/EventCard";
import {Modal} from "../Modal/Modal";

interface Props {
  numberOfDays: number;
  initialPositionOfDay: number;
  currentDate: Date;
}

const DayNumber = ({numberOfDays, initialPositionOfDay, currentDate}: Props) => {
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
            <EventCard />
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