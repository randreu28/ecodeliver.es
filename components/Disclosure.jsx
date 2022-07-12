import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/solid";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Disclosure(props) {
  const [isOpen, setisOpen] = useState(props.isOpen);

  const discRef = useRef();

  const [height, setHeight] = useState(null);

  useEffect(() => {
    setHeight(
      parseInt(
        getComputedStyle(document.getElementById("disc")).getPropertyValue(
          "height"
        ),
        10
      )
    );
    AOS.init();
  }, []);

  const handleOpen = () => {
    if (isOpen === true) {
      gsap.to(discRef.current, { height: "-=" + height });
    } else {
      gsap.to(discRef.current, { height: "+=" + height });
    }

    setisOpen(!isOpen);
  };

  return (
    <div className="space-y-3 py-5" data-aos="fade-left">
      <div className="flex space-x-3" onClick={handleOpen}>
        {isOpen ? (
          <MinusCircleIcon className="h-6 my-auto text-primary cursor-pointer" />
        ) : (
          <PlusCircleIcon className="h-6 my-auto text-primary cursor-pointer" />
        )}
        <h1 className="text-2xl md:text-3xl font-bold cursor-pointer">
          {props.title}
        </h1>
      </div>
      <p
        id="disc"
        className={
          props.isOpen
            ? "px-10 overflow-hidden h-auto"
            : "px-10 overflow-hidden h-0"
        }
        ref={discRef}
      >
        {props.text}
      </p>
    </div>
  );
}
