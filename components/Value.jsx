export default function Value({ children, title, text, className }) {
  return (
    <div
      className={
        "flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl " +
        className
      }
    >
      <span className="inline-block p-3 text-green-500 bg-green-100 rounded-full">
        {children}
      </span>

      <h1 className="text-2xl font-semibold text-secondary capitalize ">
        {title}
      </h1>

      <p className="text-gray-500">{text}</p>
    </div>
  );
}
