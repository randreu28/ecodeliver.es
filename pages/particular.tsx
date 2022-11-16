import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import CloudLogo from "../components/CloudLogo";
import toast, { Toaster } from "react-hot-toast";
import EcoDriverForm from "../components/EcoDriverForm";

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
                  Busca
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

      <section id={navData[1].href} className="bg-green-50 space-y-10">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:w-1/2" data-aos="fade-right">
              <div>
                <p className="text-primary font-semibold pb-1">
                  Nuestro modelo
                </p>
                <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl pb-3">
                  ¿Cómo funciona?
                </h1>
                <p className="text-gray-500 text-xl">
                  Cualquiera que vaya a viajar entre ciudades puede ser un{" "}
                  <b>
                    <span className="text-primary">eco</span>Driver
                  </b>
                  , aprovechando el espacio libre en el coche, transportando
                  paquetes consigo y cubriendo los gastos del viaje!
                </p>
                <div>
                  <span className="inline-block w-40 h-1 rounded-full bg-green-500" />
                  <span className="inline-block w-3 h-1 ml-1 rounded-full bg-green-500" />
                  <span className="inline-block w-1 h-1 ml-1 rounded-full bg-green-500" />
                </div>
              </div>
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-green-500 bg-green-200 rounded-xl md:mx-4">
                  <p className="px-2 font-bold text-xl">1</p>
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold text-secondary">
                    Publica tu viaje en la App
                  </h1>
                  <p className="mt-3 text-gray-500">
                    Tienes planeado viajar en coche? Completa tu perfil e
                    indícanos la información de tu viaje en la app de{" "}
                    <b>
                      <span className="text-primary">eco</span>Deliver
                    </b>
                    .
                  </p>
                </div>
              </div>
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-green-500 bg-green-200 rounded-xl md:mx-4">
                  <p className="px-2 font-bold text-xl">2</p>
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold text-secondary">
                    Recoge los paquetes en nuestro almacén
                  </h1>
                  <p className="mt-3 text-gray-500 ">
                    Te estaremos esperando con bolsas de paquetes a la salida de
                    la ciudad.
                  </p>
                </div>
              </div>
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-green-500 bg-green-200 rounded-xl md:mx-4">
                  <p className="px-2 font-bold text-xl">3</p>
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold text-secondary">
                    Deja los paquetes al llegar a tu destino
                  </h1>
                  <p className="mt-3 text-gray-500">
                    Cuando llegues a tu destino, dejas las bolsas con paquetes
                    en nuestro almacén a la entrada de la ciudad y listo! Son 5
                    minutos de desvío en cada ciudad.
                  </p>
                </div>
              </div>
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-green-500 bg-green-200 rounded-xl md:mx-4">
                  <p className="px-2 font-bold text-xl">4</p>
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold text-secondary">
                    Recibe el pago y ¡listo!
                  </h1>
                  <p className="mt-3 text-gray-500">
                    Cubriendo los costes del viaje y evitando que un camión
                    tenga que hacer el transporte (ahorrando todas esas
                    emisiones!)
                  </p>
                </div>
              </div>
            </div>
            <div
              className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center"
              data-aos="fade-left"
            >
              <Image
                className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                src="/media/stockImage2.jpg"
                alt=""
                height={500}
                width={500}
              />
            </div>
          </div>
        </div>
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/brand/line-3.svg"
          className="hidden xl:block absolute translate-x-1/3 -translate-y-40 right-0 h-1/6 scale-x-[-1]"
          alt=""
        />
        <div data-aos="fade-in">
          <div className="p-5 flex flex-col lg:flex-row rounded-lg w-fit shadow-lg mx-auto pt-10 bg-white gap-20">
            <div className="p-5 space-y-5">
              <h1 className="text-4xl lg:text-5xl font-bold text-center text-primary">
                15.7 kgCO<sub>2</sub>
              </h1>
              <p className="text-center text-gray-500 ">
                Ahorrados en un viaje
                <br /> Barcelona-Madrid*
              </p>
            </div>
            <div className="p-5 space-y-5">
              <h1 className="text-4xl lg:text-5xl font-bold text-center text-primary">
                ~50€
              </h1>
              <p className="text-center text-gray-500">
                De remuneración en un viaje <br />
                Barcelona-Valencia
              </p>
            </div>
            <div className="p-5 space-y-5">
              <h1 className="text-4xl lg:text-5xl font-bold text-center text-primary">
                100%
              </h1>
              <p className="text-center text-gray-500">Sonrisas garantizadas</p>
            </div>
          </div>
          <p className="text-gray-400 text-xs p-5 text-center">
            *Datos de la guía de cálculo de emisiones de la Generalitat de
            Cataluña y la CNMC
          </p>
        </div>

        <div className="container px-4 py-10 mx-auto lg:flex lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3" data-aos="fade-right">
            <h2 className="text-5xl font-bold tracking-tight text-gray-800 xl:text-6xl ">
              ¿List@ para convertirte <br /> en un{" "}
              <span className="text-primary">eco</span>Driver?
            </h2>
            <p className="text-gray-500 text-xl">
              Te damos un toque cuando esté listo
            </p>
          </div>
          <EcoDriverForm />
        </div>
      </section>
    </>
  );
}
