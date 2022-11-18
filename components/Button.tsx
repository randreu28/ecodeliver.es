interface Props {
  className?: string;
  children: JSX.Element | string;
  event?: () => void;
}

export default function Button({ className, children, event }: Props) {
  return (
    <button
      onClick={event}
      className={
        "px-4 py-2 font-semibold tracking-wide text-lg text-white capitalize transition-colors duration-200 transform bg-primary rounded-md focus:ring focus:ring-green-300 focus:ring-opacity-80 hover:bg-green-500 focus:outline-none focus:bg-green-600 " +
        className
      }
    >
      {children}
    </button>
  );
}
