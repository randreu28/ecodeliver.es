import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function Article({
  className,
  type,
  title,
  text,
  extLink,
  imgLink,
}) {
  return (
    <div
      className={
        "max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 " +
        className
      }
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="object-cover w-full h-64" src={imgLink} alt="Article" />

      <div className="p-6 space-y-3">
        <div>
          <span className="text-xs font-medium text-green-600 uppercase dark:text-green-400">
            {type}
          </span>
          <a
            href="#"
            className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline"
          >
            {title}
          </a>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {text}
          </p>
        </div>

        <a
          target="_blank"
          href={extLink}
          className="flex items-center -mx-1 text-sm text-green-500 capitalize transition-colors duration-200 transform dark:text-green-400 hover:underline hover:text-green-600 dark:hover:text-green-500"
          rel="noreferrer"
        >
          <span className="mx-1">Ver más</span>
          <ArrowNarrowRightIcon className="w-4 h-4 mx-1" />
        </a>
      </div>
    </div>
  );
}
