import Alert from "./Alert";

import { useForm } from "@formcarry/react";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BusinessForm() {
  //Animations
  useEffect(() => {
    AOS.init();
  }, []);

  const form = useRef();
  const [isShowing, setIsShowing] = useState(false);

  const { state, submit } = useForm({
    id: process.env.NEXT_PUBLIC_FORMCARRY_ID,
  });

  function handleSubmit(e) {
    submit(e);

    e.preventDefault();
    form.current.reset();
    form.current.value = "";
    setIsShowing(true);
  }

  return (
    <>
      <form
        className="flex flex-col space-y-5 w-full"
        data-aos="fade-left"
        ref={form}
        onSubmit={handleSubmit}
      >
        <input
          name="Nombre"
          className="px-4 py-2 text-secondary bg-white border border-gray-300 rounded-md sm:mx-2 text-lg focus:border-primary-40 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Nombre"
        />
        <input
          type="email"
          name="Email"
          className="px-4 py-2 text-secondary bg-white border border-gray-300 rounded-md sm:mx-2 text-lg focus:border-primary-40 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Correo electrónico"
          required
        />
        <input
          name="Business name"
          className="px-4 py-2 text-secondary bg-white border border-gray-300 rounded-md sm:mx-2 text-lg focus:border-primary-40 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Nombre de empresa"
          required
        />
        <textarea
          name="Message"
          className="px-4 py-2 h-32 text-secondary bg-white border border-gray-300 rounded-md sm:mx-2 text-lg focus:border-primary-40 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Mensaje"
          required
        />
        <button className="px-4 py-2 sm:ml-2 lg:max-w-fit font-semibold tracking-wide text-lg text-white capitalize transition-colors duration-200 transform bg-primary rounded-md focus:ring focus:ring-green-300 focus:ring-opacity-80 hover:bg-green-500 focus:outline-none focus:bg-green-600 ">
          Enviar
        </button>
      </form>
      <Alert
        type="success"
        title="Gracias!"
        text="Tu email ha sido enviado correctamente"
        isShowing={isShowing}
        setIsShowing={setIsShowing}
      />
    </>
  );
}
