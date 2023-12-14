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
	
	// where in the week the day is positionated 
	const positionOfDayWeek: number[] = Array.from(
		{length: initialPositionOfDay},
		(_, index) => index
	);

	return (
		<div className="flex flex-wrap text-center w-[35rem]">
			{positionOfDayWeek.map((day) => (
				<CalendarCell 
					key={day} 
					className="text-sm border-t w-[5rem] p-2">
					{}
				</CalendarCell>
			))}

			{dayNumberOfWeek.map((day) => (
				<CalendarCell 
					key={day} 
					className="text-sm border-t w-[5rem] p-2">
					{day}
				</CalendarCell>
			))}
		</div>
	)
}

export default DayNumber;