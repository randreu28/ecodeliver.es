type Props = {
  title: JSX.Element | string;
  children: JSX.Element | string;
};

export default function Number({ title, children }: Props) {
  return (
    <div className="p-5 space-y-5">
      <h1 className="text-4xl lg:text-5xl font-bold text-center text-primary">
        {title}
      </h1>
      <p className="text-center text-gray-500 ">{children}</p>
    </div>
  );
}
