import CalendarCell from "../CalendarCell/CalendarCell";

const CalendarHeader = () => {

	return (
		<div className="border-t border-r flex justify-center text-center">
			<CalendarCell>{"<<"}</CalendarCell>
			<CalendarCell>{"<"}</CalendarCell>
			<CalendarCell className="w-[15rem]">Month Year</CalendarCell>
			<CalendarCell>{">"}</CalendarCell>
			<CalendarCell>{">>"}</CalendarCell>
		</div>
	)
}

export default CalendarHeader;