import { Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";

export default function Alert({ type, title, text, isShowing, setIsShowing }) {
  let color = null;

  switch (type) {
    case "info":
      color = "text-blue-700 bg-blue-100";
      break;

    case "danger":
      color = "text-red-700 bg-red-100";
      break;

    case "success":
      color = "text-green-700 bg-green-100";
      break;

    case "warning":
      color = "text-yellow-700 bg-yellow-100";
      break;

    case "dark":
      color = "text-gray-700 bg-gray-100";
      break;
  }

  return (
    <Transition
      show={isShowing}
      enter="transition-opacity duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      as="div"
      className={
        "p-4 mb-4 text-sm rounded-lg fixed left-0 bottom-3 flex gap-2 z-10 " +
        color
      }
      role="alert"
    >
      <span className="font-bold">{title}</span> {text}
      <button onClick={() => setIsShowing(false)}>
        <XIcon className="h-4 w-4 my-auto" />
      </button>
    </Transition>
  );
}
