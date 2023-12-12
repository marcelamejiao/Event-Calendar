import CalendarHeader from "../../components/CalendarHeader/CalendarHeader";
import DaysOfWeekLabel from "../../components/DaysOfWeekLabel/DaysOfWeekLabel";

const MonthCalendar = () => {
	return (
		<div className="flex justify-center items-center flex-col" >
			<CalendarHeader />
			<DaysOfWeekLabel />
		</div>
		
	)
}

export default MonthCalendar;