import MonthCalendar from "../../container/MonthCalendar/MonthCalendar";

const CalendarHome = () => {

	return (
		<>
			<div className="text-2xl font-bold text-center p-2 text-sky-500">
			Events Calendar
			</div>
			<MonthCalendar />
		</>
	)
}

export default CalendarHome;