import CalendarCell from "../CalendarCell/CalendarCell";

const CalendarHeader = () => {

	return (
		<div className="w-[700px] border flex justify-center text-center">
			<CalendarCell>{"<<"}</CalendarCell>
			<CalendarCell>{"<"}</CalendarCell>
			<CalendarCell className="w-[301px]">Month Year</CalendarCell>
			<CalendarCell>{">"}</CalendarCell>
			<CalendarCell>{">>"}</CalendarCell>
		</div>
	)
}

export default CalendarHeader;