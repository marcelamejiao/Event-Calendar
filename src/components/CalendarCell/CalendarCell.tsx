import clsx from 'clsx';

interface Props extends React.PropsWithChildren {
	className?: string;
}

const CalendarCell: React.FC<Props> = ({className, children}) => {

	return (
		<div className={clsx("w-[5rem] border-l p-2",className)}>
			{children}
		</div>
	)
}

export default CalendarCell;