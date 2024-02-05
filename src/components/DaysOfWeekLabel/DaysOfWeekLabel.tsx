import CalendarCell from "../CalendarCell/CalendarCell";

const DaysOfWeekLabel = () => {
  const daysOfWeek: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="flex text-center border-t ">
      {daysOfWeek.map((day) => (
        <CalendarCell
          key={day}
          className="text-sm w-[10rem] p-2">
          {day}
        </CalendarCell>
      ))}
    </div>
  )
}

export default DaysOfWeekLabel;