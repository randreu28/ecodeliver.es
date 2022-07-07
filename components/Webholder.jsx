export default function WebHolder() {
  return (
    <div className="flex h-screen bg-neutral">
      <div className="m-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 md:h-24 lg:h-44 mx-auto mb-10 text-secondary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
        <p className="text-center text-secondary text-xl font-bold sm:text-2xl md:text-3xl">
          <span className="opacity-25">&lt;</span>
          En construcción
          <span className="opacity-25">/&gt;</span>
        </p>
      </div>
    </div>
  );
}
