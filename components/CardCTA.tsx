import Image from "next/image";

interface Props {
  title: string;
  imgLink: string;
  children: string | JSX.Element;
  cta: string | JSX.Element;
  href: string;
  download?: string;
}

export default function CardCTA({
  title,
  imgLink,
  children,
  cta,
  download,
  href,
}: Props) {
  return (
    <div className="mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
      <Image
        src={imgLink}
        alt=""
        className="object-cover"
        height={1080 / 3}
        width={1920 / 3}
      />
      <div className="py-5 text-center">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="px-5 pt-3 text-gray-500 max-w-lg mx-auto">{children}</p>
        <br />
        <a
          className="px-4 py-2 flex gap-2 w-fit mx-auto font-semibold tracking-wide text-lg text-white capitalize transition-colors duration-200 bg-primary rounded-md focus:ring focus:ring-green-300 focus:ring-opacity-80 hover:bg-green-500 focus:outline-none focus:bg-green-600"
          href={href}
          download={download ? download : null}
        >
          {cta}
        </a>
      </div>
    </div>
  );
}
