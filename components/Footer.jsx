import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer
      className="bg-green-50 container px-6 py-4 mx-auto space-y-5"
      data-aos="fade-down"
    >
      <div>
        <h3 className="text-2xl font-bold text-secondary text-center">
          <span className="text-primary">eco</span>Deliver
        </h3>
        <p className="my-2 text-gray-500 text-center">
          Viaja y únete a la comunidad de entregas de paquetería 100% sostenible
        </p>
      </div>

      <div className="grid grid-flow-col mx-auto max-w-xs">
        <a
          className="mx-auto"
          href="https://twitter.com/ecodeliver_es"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="h-10 w-10 fill-current text-secondary hover:opacity-75 duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
          </svg>
        </a>

        <a
          className="mx-auto"
          href="https://www.facebook.com/ecoDeliver.es"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="h-10 w-10 fill-current text-secondary hover:opacity-75 duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
          </svg>
        </a>

        <a
          className="mx-auto"
          href="https://www.instagram.com/ecodeliver"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="h-10 w-10 fill-current text-secondary hover:opacity-75 duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
          </svg>
        </a>

        <a
          className="mx-auto"
          href="https://es.linkedin.com/company/ecodelivertech"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="h-10 w-10 fill-current text-secondary hover:opacity-75 duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>

        {/* <a
              className="mx-auto lg:mx-0"
            href="https://github.com/randreu28/ecodeliver.es/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="h-10 w-10 fill-current text-secondary hover:opacity-75 duration-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
            </svg>
          </a> */}
      </div>

      <div className="lg:flex">
        <div className="mt-8 lg:mt-0 lg:w-full">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 justify-items-center">
            <div>
              <h3 className="text-gray-700 font-bold text-lg">
                Sobre nosotros
              </h3>
              <a
                href="mailto:webmaster@example.com"
                className="block mt-2 text-gray-600 hover:underline"
              >
                Trabaja con nosotros
              </a>
              <Link href="/privacidad">
                <a
                  href="#"
                  className="block mt-2 text-gray-600  hover:underline"
                >
                  Politica de privacidad
                </a>
              </Link>
              <a
                href="https://www.behance.net/gallery/125864213/ecoDeliver-Brand-Guidlines-20"
                className="block mt-2 text-gray-600 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Marca corporativa
              </a>
            </div>

            <div>
              <h3 className="text-gray-700 font-semibold text-lg">
                Contáctanos
              </h3>
              <span className="block mt-2 text-gray-600 hover:underline">
                +1 526 654 8965
              </span>
              <span className="block mt-2 text-gray-600  hover:underline">
                example@email.com
              </span>
            </div>
          </div>
        </div>
      </div>

      <hr className="h-px bg-gray-300 border-none" />

      <div>
        <p className="text-center text-gray-500">
          © ecoDeliver 2020 - All rights reserved
        </p>
      </div>
    </footer>
  );
}
