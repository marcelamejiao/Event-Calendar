import {differenceInDays, endOfMonth, startOfMonth} from "date-fns";
import CalendarHeader from "../../components/CalendarHeader/CalendarHeader";
import DayNumber from "../../components/DayNumber/DayNumber";
import DaysOfWeekLabel from "../../components/DaysOfWeekLabel/DaysOfWeekLabel";
import {useEffect, useState} from "react";
import { getEventsByDate } from "../../services/events";
import CalendarEvent from "../../models/event";

const MonthCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date);

  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);
  const numberOfDays = differenceInDays(endDate, startDate) + 1;
  const initialPositionOfDay = startDate.getDay();

  const [events, setEvents] = useState<Array<CalendarEvent>>([]);
  const [added, setAdded] = useState<number>(0);

  useEffect(() => {
    getEventsByDate(startDate.toJSON(), endDate.toJSON()).then((events) => {
      setEvents(events);
    });
  }, [added]);



  return (
    <div className="flex justify-center items-center flex-col">
      <CalendarHeader
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
      <DaysOfWeekLabel/>
      <DayNumber
        numberOfDays={numberOfDays}
        initialPositionOfDay={initialPositionOfDay}
        currentDate={currentDate}
        events={events}
      />
    </div>

  )
}

export default MonthCalendar;