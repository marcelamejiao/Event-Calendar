import CalendarCell from "../CalendarCell/CalendarCell";

const DaysOfWeekLabel = () => {
  const daysOfWeek: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="flex text-center">
      {daysOfWeek.map((day) => (
        <CalendarCell
          key={day}
          className="text-sm w-[10rem] pt-6 pb-1">
          {day}
        </CalendarCell>
      ))}
    </div>
  )
}

export default DaysOfWeekLabel;