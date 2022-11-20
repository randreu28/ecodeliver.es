import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import AnimateHeight from "react-animate-height";

import type { Height } from "react-animate-height";

interface Props {
  title: string | JSX.Element;
  children: string | JSX.Element;
  isOpen?: boolean;
}

export default function Disclosure({ title, children, isOpen = false }: Props) {
  const [Open, setOpen] = useState<boolean>(isOpen);
  const [height, setHeight] = useState<Height>(0);

  useEffect(() => {
    if (isOpen) {
      setHeight("auto");
    }
  }, [isOpen]);

  const handleOpen = () => {
    setHeight(height === 0 ? "auto" : 0);
    setOpen(!Open);
  };

  return (
    <div className="space-y-3 py-5" data-aos="fade-left">
      <div className="flex" onClick={handleOpen}>
        {Open ? (
          <MinusCircleIcon className="absolute h-6 w-6 my-auto text-primary cursor-pointer" />
        ) : (
          <PlusCircleIcon className="absolute h-6 w-6 my-auto text-primary cursor-pointer" />
        )}
        <h1 className="text-2xl md:text-3xl mx-10 font-bold cursor-pointer">
          {title}
        </h1>
      </div>
      <AnimateHeight duration={500} height={height}>
        <p className="px-10 text-lg text-gray-500 overflow-hidden">
          {children}
        </p>
      </AnimateHeight>
    </div>
  );
}
