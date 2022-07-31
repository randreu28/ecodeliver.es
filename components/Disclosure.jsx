import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";

import AnimateHeight from "react-animate-height";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Disclosure({ title, text, isOpen }) {
  const [Open, setOpen] = useState(isOpen);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

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
        <p className="px-10 text-lg text-gray-500 overflow-hidden">{text}</p>
      </AnimateHeight>
    </div>
  );
}
