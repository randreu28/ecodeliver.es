import {
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/outline";
import AnimateHeight from "react-animate-height";
import { useState } from "react";

export default function Step({ title, date, children, state, active, last }) {
  const [height, setHeight] = useState(active ? "auto" : 0);

  function StateIcon() {
    switch (state) {
      case "done":
        return <CheckCircleIcon className="h-10 w-10 text-primary z-20" />;
      case "idle":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-10 w-10 text-gray-500 z-20"
          >
            <circle cx="12" cy="12" r="9" strokeWidth="2" />
          </svg>
        );
      case "warning":
        return (
          <ExclamationCircleIcon className="h-10 w-10 text-yellow-500 z-20" />
        );
      default:
        return <CheckCircleIcon className="h-10 w-10 text-primary z-20" />;
    }
  }

  function openStep() {
    setHeight(height === 0 ? "auto" : 0);
  }

  function getStateColor() {
    switch (state) {
      case "done":
        return "text-primary";
      case "idle":
        return "text-gray-600";
      case "warning":
        return "text-yellow-500";
      default:
        return "text-primary";
    }
  }

  return (
    <li
      className="flex justify-between hover:cursor-pointer hover:bg-gray-50 duration-200"
      onClick={openStep}
    >
      <div className="flex gap-5">
        <StateIcon />
        <div>
          <b className={"text-xl " + getStateColor()}>{title}</b>
          <p className="text-gray-600">{state == "idle" ? "" : date}</p>
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
