import CalendarHeader from "../../components/CalendarHeader/CalendarHeader";
import DayNumber from "../../components/DayNumber/DayNumber";
import DaysOfWeekLabel from "../../components/DaysOfWeekLabel/DaysOfWeekLabel";

const MonthCalendar = () => {
	return (
		<div className="flex justify-center items-center flex-col" >
			<CalendarHeader />
			<DaysOfWeekLabel />
			<DayNumber />
		</div>
		
	)
}

export default MonthCalendar;