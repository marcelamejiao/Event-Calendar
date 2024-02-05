import {add, format, sub} from "date-fns";
import CalendarCell from "../CalendarCell/CalendarCell";

interface Props {
  currentDate: Date;
  setCurrentDate: (currentDate: Date) => void;
  setAdded: (added: number) => void;
  added: number;
}

const CalendarHeader = ({currentDate, setCurrentDate, setAdded, added}: Props) => {

  const previousMonth = () => {
    setCurrentDate && setCurrentDate(sub(currentDate, {months: 1}));
    setAdded(added + 1);
  }

  const nextMonth = () => {
    setCurrentDate && setCurrentDate(add(currentDate, {months: 1}));
    setAdded(added + 1);
  }

  const previousYear = () => {
    setCurrentDate && setCurrentDate(sub(currentDate, {years: 1}));
    setAdded(added + 1);
  }

  const nextYear = () => {
    setCurrentDate && setCurrentDate(add(currentDate, {years: 1}));
    setAdded(added + 1);
  }

  return (
    <div className="border-t flex justify-center text-center items-center">
      <CalendarCell onClick={previousYear}>{"<<"}</CalendarCell>
      <CalendarCell onClick={previousMonth}>{"<"}</CalendarCell>
      <CalendarCell className="w-[30rem] p-2 text-lg">{format(currentDate, 'LLLL yyyy')}</CalendarCell>
      <CalendarCell onClick={nextMonth}>{">"}</CalendarCell>
      <CalendarCell onClick={nextYear}>{">>"}</CalendarCell>
    </div>
  )
}

export default CalendarHeader;