import { format, sub } from "date-fns";
import CalendarCell from "../CalendarCell/CalendarCell";

interface Props {
	currentDate: Date;
	setCurrentDate: (currentDate: Date) => void;
}

const CalendarHeader = ({ currentDate, setCurrentDate }: Props) => {

	const previousMonth = () => {
		setCurrentDate && setCurrentDate(sub(currentDate, {months: 1}));
	}

	return (
		<div className="border-t flex justify-center text-center">
			<CalendarCell>{"<<"}</CalendarCell>
			<CalendarCell onClick={previousMonth} >{"<"}</CalendarCell>
			<CalendarCell className="w-[15rem]">{format(currentDate, 'LLLL yyyy')}</CalendarCell>
			<CalendarCell>{">"}</CalendarCell>
			<CalendarCell>{">>"}</CalendarCell>
		</div>
	)
}

export default CalendarHeader;