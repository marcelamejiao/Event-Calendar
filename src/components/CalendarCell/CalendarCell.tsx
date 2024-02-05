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
        className ? className : "w-[10rem] p-2",
        {"cursor-pointer border hover:bg-zinc-600 bg-zinc-800 text-neutral-50": !!onClick},
      )}
    >
      {children}
    </div>
  )
}

export default CalendarCell;