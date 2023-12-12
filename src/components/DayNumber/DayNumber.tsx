import CalendarCell from "../CalendarCell/CalendarCell";

interface Props {
	numberOfDays: number
}

const DayNumber = ({ numberOfDays }: Props) => {
	const dayNumberOfWeek: number[] = Array.from(
		{length: numberOfDays},
		(_, index) => index + 1
	);

	return (
		<div className="flex flex-wrap text-center w-[35rem]">
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