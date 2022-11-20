type Props = {
  title: string | JSX.Element;
  description: string | JSX.Element;
  children: string | JSX.Element;
};

export default function ValueProposition({
  title,
  children,
  description,
}: Props) {
  return (
    <div className="space-y-3">
      <span className="inline-block p-3 text-green-500 bg-green-100 rounded-xl">
        {children}
      </span>
      <h1 className="text-2xl font-semibold text-gray-700 capitalize">
        {title}
      </h1>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}
