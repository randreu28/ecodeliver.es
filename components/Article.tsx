import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { i18nArticles } from "../i18n";

interface Props {
  className?: string;
  source: string;
  title: string;
  children: string | JSX.Element;
  extLink: string;
  imgLink: string;
}

export default function Article({
  className,
  source,
  title,
  children,
  extLink,
  imgLink,
}: Props) {
  const translations = i18nArticles[useRouter().locale as "es" | "en"];
  return (
    <div
      className={
        "max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md " +
        className
      }
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="object-cover w-full h-64" src={imgLink} alt="Article" />

      <div className="p-6 space-y-3">
        <div>
          <span className="text-xs font-medium text-green-600 uppercase">
            {source}
          </span>
          <h2 className="block mt-2 text-2xl font-semibold text-gray-800 line-clamp-2">
            {title}
          </h2>
          <p className="mt-2 text-gray-500 line-clamp-3">{children}</p>
        </div>

        <a
          target="_blank"
          href={extLink}
          className="flex items-center -mx-1 text-green-500 capitalize transition-colors duration-200 transform  hover:underline hover:text-green-600"
          rel="noreferrer"
        >
          <span className="mx-1">{translations}</span>
          <ArrowNarrowRightIcon className="w-4 h-4 mx-1" />
        </a>
      </div>
    </div>
  );
}
