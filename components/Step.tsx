type Props = {
  title: string;
  step: number;
  children: JSX.Element | string;
};

export default function Step({ title, step, children }: Props) {
  return (
    <div className="md:flex md:items-start md:-mx-4">
      <span className="inline-block p-2 text-green-500 bg-green-200 rounded-xl md:mx-4">
        <p className="px-2 font-bold text-xl">{step}</p>
      </span>
      <div className="mt-4 md:mx-4 md:mt-0">
        <h1 className="text-2xl font-semibold text-secondary">{title}</h1>
        <p className="mt-3 text-gray-500">{children}</p>
      </div>
    </div>
  );
}
