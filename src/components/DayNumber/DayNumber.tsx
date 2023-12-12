import CalendarCell from "../CalendarCell/CalendarCell";

const DayNumber = () => {
	const dayNumberOfWeek: number[] = Array.from(
		{length: 31},
		(_, index) => index + 1
	);

	return (
		<div className="flex flex-wrap text-center w-[35rem]">
			{dayNumberOfWeek.map((day) => (
				<CalendarCell className="text-sm border-t">{day}</CalendarCell>
			))}
		</div>
	)
}

export default DayNumber;