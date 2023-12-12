import { differenceInDays, endOfMonth, startOfMonth } from "date-fns";
import CalendarHeader from "../../components/CalendarHeader/CalendarHeader";
import DayNumber from "../../components/DayNumber/DayNumber";
import DaysOfWeekLabel from "../../components/DaysOfWeekLabel/DaysOfWeekLabel";
import { useState } from "react";

const MonthCalendar = () => {
	const [currentDate, setCurrentDate] = useState(new Date);
	const startDate = startOfMonth(currentDate);
	const endDate = endOfMonth(currentDate);
	const numberOfDays = differenceInDays(endDate, startDate) + 1;

	return (
		<div className="flex justify-center items-center flex-col" >
			<CalendarHeader />
			<DaysOfWeekLabel />
			<DayNumber numberOfDays={numberOfDays}/>
		</div>
		
	)
}

export default MonthCalendar;