import {
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/outline";
import AnimateHeight from "react-animate-height";
import { useState } from "react";

export default function Step({ title, date, children, state }) {
  const [height, setHeight] = useState(0);

  function getState() {
    switch (state) {
      case "done":
        return <CheckCircleIcon className="h-10 w-10 text-primary z-10" />;
      case "doing":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-10 w-10 text-gray-500 z-10"
          >
            <circle cx="12" cy="12" r="9" strokeWidth="2" />
          </svg>
        );
      case "warning":
        return (
          <ExclamationCircleIcon className="h-10 w-10 text-yellow-500 z-10" />
        );
      default:
        return <CheckCircleIcon className="h-10 w-10 text-primary z-10" />;
    }
  }

  function openStep() {
    setHeight(height === 0 ? "auto" : 0);
  }

  return (
    <li
      className="flex justify-between hover:cursor-pointer hover:bg-gray-50 duration-200"
      onClick={openStep}
    >
      <div id="test" className="flex gap-5">
        {getState()}
        <div
        /*  
          Failed attempt to have a connecting line between each step. 

          className="
          before:absolute before:h-10 before:w-1 before:-translate-x-[42px] before:-translate-y-[35px] before:bg-primary
          
          after:absolute after:h-10 after:w-1 after:-translate-x-[42px] after:-translate-y-[15px] after:bg-red-500 after:z-20
          " 
        */
        >
          <b className="text-xl">{title}</b>
          <p className="text-gray-600">{date}</p>
          <AnimateHeight
            className="text-gray-600"
            duration={500}
            height={height}
          >
            <br />
            {children}
          </AnimateHeight>
        </div>
      </div>
      {height === 0 ? (
        <ChevronDownIcon className="h-6 w-6" />
      ) : (
        <ChevronUpIcon className="h-6 w-6" />
      )}
    </li>
  );
}
