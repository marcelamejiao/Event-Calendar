import clsx from 'clsx';

interface Props extends React.PropsWithChildren {
	className?: string;
	onClick?: () => void;
}

const CalendarCell: React.FC<Props> = ({onClick, className, children}) => {

	return (
		<div onClick={onClick} className={clsx("w-[5rem] p-2",className)}>
			{children}
		</div>
	)
}

export default CalendarCell;