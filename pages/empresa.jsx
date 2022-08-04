import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Alert from "../components/Alert";
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
            src="/media/brand/line-6.svg"
            className="hidden xl:block absolute right-1/2"
            alt=""
          />
          <div
            className="m-auto font-semibold"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <h1 className="text-secondary text-4xl md:text-6xl max-w-3xl !leading-[1.15]">
              Entrega de paquetería{" "}
              <span className="text-primary">100% sostenible</span>, más allá de
              la movilidad eléctrica
            </h1>

            <div className="space-y-2 mt-10 text-gray-500">
              <p className="text-xl pb-2">Haz el seguimiento de tu paquete:</p>
              <div className="flex flex-row gap-5 flex-wrap">
                <Button
                  text="Empieza"
                  event={() => {
                    alert("funciona");
                  }}
                />
              </div>
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
          src="/media/brand/line-4.svg"
          className="hidden xl:block absolute -translate-y-48 translate-x-1/3 right-0 h-1/6 scale-x-[-1] -z-10"
          alt=""
        />
        <div>
          <h1
            className="text-center text-secodary text-4xl font-semibold"
            data-aos="fade-up"
          >
            Con la confianza de...
          </h1>
          <CloudLogo />
        </div>
      </section>
      <section id={navData[1].href} className="h-screen flex bg-slate-300">
        <h1 className="m-auto text-5xl">{navData[1].name}</h1>
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
