import {differenceInDays, endOfMonth, startOfMonth} from "date-fns";
import CalendarHeader from "../../components/CalendarHeader/CalendarHeader";
import DayNumber from "../../components/DayNumber/DayNumber";
import DaysOfWeekLabel from "../../components/DaysOfWeekLabel/DaysOfWeekLabel";
import {useState} from "react";

const MonthCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date);

  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);
  const numberOfDays = differenceInDays(endDate, startDate) + 1;
  const initialPositionOfDay = startDate.getDay();


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
      />
    </div>

  )
}

export default MonthCalendar;