import CalendarCell from "../CalendarCell/CalendarCell";

interface Props {
	numberOfDays: number;
	initialPositionOfDay: number;
}

const DayNumber = ({ numberOfDays, initialPositionOfDay }: Props) => {
	const dayNumberOfWeek: number[] = Array.from(
		{length: numberOfDays},
		(_, index) => index + 1
	);

	const positionOfDayWeek: number[] = Array.from(
		{length: initialPositionOfDay - 1},
		(_, index) => index
	);

	return (
		<div className="flex flex-wrap text-center w-[35rem]">
			{positionOfDayWeek.map((day) => (
				<CalendarCell 
					key={day} 
					className="text-sm border-t">
					{}
				</CalendarCell>
			))}

			{dayNumberOfWeek.map((day) => (
				<CalendarCell 
					key={day} 
					className="text-sm border-t">
					{day}
				</CalendarCell>
			))}
		</div>
	)
}

export default DayNumber;