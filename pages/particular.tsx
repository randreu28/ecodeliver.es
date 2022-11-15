import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import CloudLogo from "../components/CloudLogo";
import toast, { Toaster } from "react-hot-toast";

const navData = [
  { name: "Inicio", href: "inicio" },
  { name: "Cómo funciona", href: "como-funciona" },
  { name: "Valores", href: "valores" },
  { name: "Noticias", href: "noticias" },
  { name: "FAQ", href: "faq" },
];

const WobblyTexts: string[] = ["sostenible", "transparente", "diferente"];

export default function Particular() {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => clearTimeout(intervalId);
  }, []);

  const search = useRef<HTMLInputElement>(null!);

  return (
    <>
      <Head>
        <title>ecoDeliver - El BlaBlaCar de la paquetería, sostenible</title>
        <meta
          name="description"
          content="Transporte de paquetería sostenible, mediante una entrega colaborativa que te permite cubrir los costes de tus viajes en coche por España"
        />
      </Head>
      <Navbar navData={navData} />
      <Toaster position="bottom-left" />
      <section id={navData[0].href} className="space-y-5">
        <main className="min-h-screen pt-20 grid grid-cols-1 xl:grid-cols-2 gap-1 md:gap-5 p-5">
          {/*  eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/brand/line-6.svg"
            className="hidden xl:block absolute right-1/2"
            alt=""
          />
          <div
            className="m-auto font-semibold"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h1 className="text-secondary text-4xl md:text-5xl 2xl:text-6xl max-w-2xl !leading-[1.15]">
              Viaja y únete a la comunidad de entrega de paquetería más{" "}
              <TextTransition
                inline={true}
                className="text-primary"
                springConfig={presets.wobbly}
              >
                <span>{WobblyTexts[index % WobblyTexts.length]}</span>
              </TextTransition>
            </h1>
            <div className="space-y-2 lg:mt-10 text-gray-500">
              <p className="text-xl pb-2">Haz el seguimiento de tu paquete:</p>
              <div className="flex flex-row gap-5 flex-wrap">
                <input
                  type="text"
                  className="px-4 py-2 text-lg text-secondary bg-white border border-gray-300 rounded-md focus:border-primary-40 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40 w-full sm:w-fit"
                  placeholder="Número de seguimiento"
                  ref={search}
                />
                <Button
                  className="w-full sm:w-fit"
                  event={() => {
                    toast.error(
                      "Servidores no disponibles. Porfavor inténtalo mas tarde"
                    );
                    search.current.value = "";
                  }}
                >
                  <>Busca</>
                </Button>
              </div>
            </div>
          </div>
          <div
            className="mx-auto md:m-auto"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <Image
              className="rounded-lg"
              src="/media/pilotTest.jpg"
              alt="logo"
              height={1000 / 2.5}
              width={1500 / 2.5}
              priority
            />
          </div>
        </main>
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/brand/line-4.svg"
          className="hidden xl:block absolute -translate-y-48 translate-x-1/3 right-0 h-1/6 scale-x-[-1] -z-10"
          alt=""
        />
        <div>
          <h1
            className="text-center text-secodary text-4xl font-semibold"
            data-aos="fade-up"
          >
            Con el apoyo de...
          </h1>
          <CloudLogo />
        </div>
      </section>
    </>
  );
}
