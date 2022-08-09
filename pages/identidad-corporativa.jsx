import { DownloadIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import SmNavbar from "../components/SmNavbar";

export default function Identidad() {
  return (
    <>
      <Head>
        <title>ecoDeliver - Identidad corporativa</title>
      </Head>
      <SmNavbar />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/media/brand/line-1.svg"
        className="hidden xl:block absolute translate-x-1/3 right-0 h-64 translate-y-32 scale-x-[-1]"
        alt=""
      />
      <div className="max-w-5xl space-y-10 container pt-20 p-5 mx-auto text-secondary">
        <h1 className="text-5xl font-semibold">
          Nuestra identidad corporativa 🙌
        </h1>
        <p className="text-gray-500 text-xl">
          El propósito de estas pautas es facilitar que cualquiera que quiera
          usar nuestra imagen corporativa pueda hacerlo respetando nuestra marca
          y valores corporativos. Han sido diseñadas para asegurar que la marca
          represente nuestros valores de la forma en que lo pretendíamos.
        </p>
        <p className="text-gray-500 text-xl">
          ¿Eres un creativo? Considera valorarnos en{" "}
          <a
            href="https://www.behance.net/gallery/125864213/ecoDeliver-Brand-Guidlines-20"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            Behance
          </a>
          !
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-auto pb-10">
          <div className="mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
            <Image
              src="/media/brand/manual.png"
              alt=""
              className="object-cover"
              height={1080 / 3}
              width={1920 / 3}
            />
            <div className="py-5 text-center">
              <h3 className="font-semibold text-xl">Manual de identidad</h3>
              <p className="px-5 pt-3 text-gray-500 max-w-lg mx-auto">
                El manual contiene todo lo que necesitas para utilizar nuestra
                marca de la manera en que lo pretendíamos.
              </p>
              <br />
              <a
                className="px-4 py-2 flex gap-2 w-fit mx-auto font-semibold tracking-wide text-lg text-white capitalize transition-colors duration-200 bg-primary rounded-md focus:ring focus:ring-green-300 focus:ring-opacity-80 hover:bg-green-500 focus:outline-none focus:bg-green-600"
                href="/media/brand/manual.pdf"
                download="Identity_Manual_ecoDeliver.pdf"
              >
                <DownloadIcon className="w-6 h-6" />
                Descargar
              </a>
            </div>
          </div>
          <div className="mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
            <Image
              src="/media/brand/logo.png"
              alt=""
              className="object-cover"
              height={1080 / 3}
              width={1920 / 3}
            />
            <div className="py-5 text-center">
              <h3 className="font-semibold text-xl">Logo</h3>
              <p className="px-5 pt-3 text-gray-500 max-w-lg mx-auto">
                Incluye el logo en diferentes formatos (rasterizado, vectorial)
                y en diferentes temas (claro, oscuro).
              </p>
              <br />
              <a
                className="px-4 py-2 flex gap-2 w-fit mx-auto font-semibold tracking-wide text-lg text-white capitalize transition-colors duration-200 bg-primary rounded-md focus:ring focus:ring-green-300 focus:ring-opacity-80 hover:bg-green-500 focus:outline-none focus:bg-green-600"
                href="/media/brand/logo.zip"
                download="Logo_ecoDeliver.zip"
              >
                <DownloadIcon className="w-6 h-6" />
                Descargar
              </a>
            </div>
          </div>
          <div className="mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
            <Image
              src="/media/brand/typography.png"
              alt=""
              className="object-cover"
              height={1080 / 3}
              width={1920 / 3}
            />
            <div className="py-5 text-center">
              <h3 className="font-semibold text-xl">Tipografía</h3>
              <p className="px-5 pt-3 text-gray-500 max-w-lg mx-auto">
                Nuestra tipografía de preferencia es Urbanist, diseñada por
                Corey Hu y una de las fuentes libres de Google Fonts.
              </p>
              <br />
              <a
                className="px-4 py-2 flex gap-2 w-fit mx-auto font-semibold tracking-wide text-lg text-white capitalize transition-colors duration-200 bg-primary rounded-md focus:ring focus:ring-green-300 focus:ring-opacity-80 hover:bg-green-500 focus:outline-none focus:bg-green-600"
                href="https://fonts.google.com/specimen/Urbanist?query=urbanist"
              >
                <DownloadIcon className="w-6 h-6" />
                Descargar
              </a>
            </div>
          </div>
          <div className="mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
            <Image
              src="/media/brand/support-lines.png"
              alt=""
              className="object-cover"
              height={1080 / 3}
              width={1920 / 3}
            />
            <div className="py-5 text-center">
              <h3 className="font-semibold text-xl">Líneas de soporte</h3>
              <p className="px-5 pt-3 text-gray-500 max-w-lg mx-auto">
                Incluye diferentes líneas de soporte con diferentes tamaños,
                formas y longitudes.
              </p>
              <br />
              <a
                className="px-4 py-2 flex gap-2 w-fit mx-auto font-semibold tracking-wide text-lg text-white capitalize transition-colors duration-200 bg-primary rounded-md focus:ring focus:ring-green-300 focus:ring-opacity-80 hover:bg-green-500 focus:outline-none focus:bg-green-600"
                href="/media/brand/support-lines.zip"
                download="Support_Lines.zip"
              >
                <DownloadIcon className="w-6 h-6" />
                Descargar
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*  eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/media/brand/line-3.svg"
        className="hidden xl:block absolute left-0 h-32 -translate-y-72 -translate-x-1/2"
        alt=""
      />
      <Footer className="top-0" />
    </>
  );
}
