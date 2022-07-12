import Button from "./Button";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Form() {
  //Animations
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mt-8 lg:mt-0" data-aos="fade-left">
      <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
        <input
          id="email"
          type="text"
          className="px-4 py-2 text-secondary bg-white border border-gray-300 rounded-md sm:mx-2 text-lg focus:border-primary-40 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Correo electrónico"
        />

        <Button text="Notificame" />
      </div>

      <p className="mt-3 text-sm text-gray-500 ">
        Tranquilo, no enviamos spam. Nunca. ¡Sólo actualizaciones <br />{" "}
        importantes! Revisa nuestra{" "}
        <Link href="/privacidad">
          <a
            target="_blank "
            className="text-primary underline hover:opacity-75 duration-200"
          >
            politica de privacidad.
          </a>
        </Link>
      </p>
    </div>
  );
}
