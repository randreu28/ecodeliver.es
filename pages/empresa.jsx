import Navbar from "../components/Navbar";
import {
  FingerPrintIcon,
  LightningBoltIcon,
  AnnotationIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";
import CloudLogo from "../components/CloudLogo";
import Image from "next/image";
import Head from "next/head";
import Cookies from "js-cookie";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Empresa() {
  Cookies.set("isBusiness", true);

  const navData = [
    { name: "Inicio", href: "inicio" },
    { name: "Valores", href: "valores" },
    { name: "Sobre nosotros", href: "nosotros" },
    { name: "FAQ", href: "faq" },
  ];

  //Animations
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>
          ecoDeliver - Entrega de paqueteria sostenible para e-commerce
        </title>
        <meta
          name="description"
          content="Transporte de paquetería colaborativo y de última milla verde mediante vehículos eléctricos en España."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/ecodeliver-es/image/upload/v1659538036/stockImage3_podaof.jpg"
        />
      </Head>
      <Navbar navData={navData} />

      <section id={navData[0].href} className="space-y-5">
        <main className="min-h-screen pt-20 flex flex-row-reverse flex-wrap gap-1 md:gap-5 p-5">
          {/*  eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/brand/line-4.svg"
            className="hidden xl:block absolute left-0 h-1/6 -translate-x-1/2"
            alt=""
          />
          <div
            className="m-auto font-semibold"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <h1 className="text-secondary text-4xl md:text-6xl max-w-3xl !leading-[1.15] font-bold">
              Entrega de paquetería{" "}
              <span className="text-primary">100% sostenible</span>, más allá de
              la movilidad eléctrica
            </h1>

            <div className="space-y-2 mt-10 text-gray-500">
              <p className="text-lg font-normal pb-2">
                Tienes una cuenta? Accede a la información de tus envíos aquí:
              </p>
              <div className="flex flex-row gap-5 flex-wrap">{/* ? */}</div>
            </div>
          </div>
          <div
            className="mx-auto md:m-auto"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <Image
              className="hidden rounded-lg"
              src="/media/stockImage3.jpg"
              alt="logo"
              height={1000 / 2.5}
              width={1500 / 2.5}
              priority
            />
          </div>
        </main>
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/brand/line-6.svg"
          className="hidden xl:block absolute -translate-y-64 translate-x-1/3 right-0 h-1/6 scale-x-[-1] -z-10"
          alt=""
        />
        <div>
          <h1
            className="text-center text-secondary text-4xl font-bold"
            data-aos="fade-up"
          >
            Con la confianza de...
          </h1>
          <CloudLogo />
        </div>
      </section>
      <section id={navData[1].href} className="space-y-5">
        <h1
          className="text-4xl text-center text-secondary font-bold "
          data-aos="fade-in"
        >
          El courier sostenible para E-commerce
        </h1>
        <p
          className="md:text-center text-gray-500 pt-2 px-5 text-lg max-w-3xl mx-auto"
          data-aos="fade-in"
        >
          El único servicio capaz de hacer una entrega desde tu almacén al
          domicilio de tu cliente de forma{" "}
          <b className="text-primary">sostenible</b>, no sólo cubriendo los
          trayectos de última milla.
        </p>
        <div data-aos="fade-in" className="pb-16 pt-10">
          <div className="p-5 flex flex-col lg:flex-row rounded-lg w-fit drop-shadow-lg shadow-lg mx-auto pt-10 bg-white gap-20">
            <div className="p-5 space-y-5">
              <h1 className="text-4xl lg:text-5xl font-bold text-center text-primary">
                100%
              </h1>
              <p className="text-center text-gray-500 ">
                Del trayecto sostenible
              </p>
            </div>
            <div className="p-5 space-y-5">
              <h1 className="text-4xl lg:text-5xl font-bold text-center text-primary">
                24/48h
              </h1>
              <p className="text-center text-gray-500">Servicio rápido</p>
            </div>
            <div className="p-5 space-y-5">
              <h1 className="text-4xl lg:text-5xl font-bold text-center text-primary">
                €
              </h1>
              <p className="text-center text-gray-500">Precio competitivo</p>
            </div>
          </div>
        </div>
        <img
          src="/media/brand/line-3.svg"
          className="hidden xl:block absolute right-0 h-36 translate-y-12 scale-x-[-1] translate-x-1/3"
          alt=""
        />

        <div className="bg-green-50">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl max-w-lg pb-5">
              Con valores que complementan a los de tu marca
            </h1>
            <p className="text-gray-500 text-xl">
              Juntos, hacemos la diferencia
            </p>
            <div className="mt-2">
              <span className="inline-block w-40 h-1 rounded-full bg-green-500" />
              <span className="inline-block w-3 h-1 ml-1 rounded-full bg-green-500" />
              <span className="inline-block w-1 h-1 ml-1 rounded-full bg-green-500" />
            </div>
            <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
              <div className="w-full lg:w-1/2 grid grid-cols-1 gap-8 xl:gap-16 md:grid-cols-2">
                <div className="space-y-3">
                  <span className="inline-block p-3 text-green-500 bg-green-100 rounded-xl">
                    <FingerPrintIcon className="w-6 h-6" />
                  </span>
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize">
                    Sostenibilidad
                  </h1>
                  <p className="text-gray-500">
                    Al ofrecer un servicio en comunidad, compartimos recursos y
                    salimos ganando todos! Ahorramos que camiones tengan que
                    hacer el trayecto y salvamos emisiones.
                  </p>
                </div>
                <div className="space-y-3">
                  <span className="inline-block p-3 text-green-500 bg-green-100 rounded-xl">
                    <ShieldCheckIcon className="h-6 w-6" />
                  </span>
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize">
                    Fiabilidad
                  </h1>
                  <p className="text-gray-500">
                    El compromiso con nuestros clientes es lo más importante,
                    por lo que te aseguramos que tu envío llegará bien y a
                    tiempo.
                  </p>
                </div>
                <div className="space-y-3">
                  <span className="inline-block p-3 text-green-500 bg-green-100 rounded-xl">
                    <AnnotationIcon className="h-6 w-6" />
                  </span>
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize">
                    Comunicación
                  </h1>
                  <p className="text-gray-500">
                    La transparencia, eficacia y reflexión en cuanto a la
                    entrega y la sostenibilidad es algo que nos identifica.
                  </p>
                </div>
                <div className="space-y-3">
                  <span className="inline-block p-3 text-green-500 bg-green-100 rounded-xl">
                    <LightningBoltIcon className="h-6 w-6" />
                  </span>
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize">
                    Rapidez
                  </h1>
                  <p className="text-gray-500">
                    Entrega 24/28h, incluso el mismo día en las ciudades más
                    importantes de España.
                  </p>
                </div>
              </div>
              <div className="hidden lg:flex lg:w-1/2 lg:justify-end">
                <Image
                  width={500}
                  height={500}
                  className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                  src="/media/stockImage1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id={navData[2].href} className="h-screen flex bg-slate-200">
        <h1 className="m-auto text-5xl">{navData[2].name}</h1>
      </section>
      <section id={navData[3].href} className="h-screen flex bg-slate-300">
        <h1 className="m-auto text-5xl">{navData[3].name}</h1>
      </section>
    </>
  );
}
