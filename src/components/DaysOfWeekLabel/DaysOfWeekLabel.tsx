import CalendarCell from "../CalendarCell/CalendarCell";

const DaysOfWeekLabel = () => {
	const daysOfWeek: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

	return (
		<div className="flex text-center border-t ">
			{daysOfWeek.map((day) => (
				<CalendarCell 
					key={day} 
					className="text-sm">
					{day}
				</CalendarCell>
			))}
		</div>
	)
}

export default DaysOfWeekLabel;