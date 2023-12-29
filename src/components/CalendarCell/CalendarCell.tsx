import clsx from 'clsx';

interface Props extends React.PropsWithChildren {
  className?: string;
  onClick?: () => void;
}

const CalendarCell: React.FC<Props> = ({onClick, className, children}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        className ? className : "w-[5rem] p-2",
        {"cursor-pointer bg-sky-50 hover:bg-gray-100 active:bg-gray-300 ": !!onClick},
      )}
    >
      {children}
    </div>
  )
}

export default CalendarCell;