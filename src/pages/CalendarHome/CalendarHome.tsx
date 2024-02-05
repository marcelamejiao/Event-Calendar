import MonthCalendar from "../../container/MonthCalendar/MonthCalendar";

const CalendarHome = () => {

  return (
    <>
      <div className="text-6xl drop-shadow-xl font-black text-center pb-8 tracking-widest text-white">
        My Calendar
      </div>
      <MonthCalendar/>
    </>
  )
}

export default CalendarHome;