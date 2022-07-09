export default function Button({ className, text }) {
  return (
    <button
      className={
        "px-4 py-2 font-semibold tracking-wide text-white capitalize transition-colors duration-200 transform bg-primary rounded-md focus:ring focus:ring-green-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-green-500 focus:outline-none focus:bg-green-600 " +
        className
      }
    >
      {text}
    </button>
  );
}
