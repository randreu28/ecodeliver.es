/* eslint-disable @next/next/no-img-element */
import Navbar from "../components/Navbar";
import {
  FingerPrintIcon,
  LightningBoltIcon,
  AnnotationIcon,
  ShieldCheckIcon,
  OfficeBuildingIcon,
  UserGroupIcon,
  MailIcon,
} from "@heroicons/react/outline";
import CloudLogo from "../components/CloudLogo";
import Image from "next/image";
import Head from "next/head";
import Cookies from "js-cookie";
import Value from "../components/Value";
import Article from "../components/Article";
import Disclosure from "../components/Disclosure";
import Footer from "../components/Footer";
import BusinessForm from "../components/BusinessForm";

import { useEffect } from "react";
import AOS from "aos";
import { useState } from "react";
import "aos/dist/aos.css";
import Alert from "../components/Alert";
import { ArrowRightIcon } from "@heroicons/react/solid";

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

  const [isShowing, setIsShowing] = useState(false);

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

      <section id={navData[0].href}>
        <main className="min-h-screen pt-20 flex flex-row-reverse flex-wrap gap-1 md:gap-5 p-5">
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
            <h1 className="text-secondary text-4xl md:text-5xl 2xl:text-6xl max-w-3xl !leading-[1.15] font-semibold">
              Entrega de paquetería{" "}
              <span className="text-primary">100% sostenible</span>, más allá de
              la movilidad eléctrica
            </h1>

            <div className="space-y-2 mt-10 text-gray-500">
              <p className="text-lg font-normal pb-2">
                Tienes una cuenta? Accede a la información de tus envíos aquí:
              </p>
              <div className="flex flex-col sm:flex-row gap-5 w-full">
                <button
                  onClick={() => {
                    setIsShowing(true);
                  }}
                  className="px-4 py-2 justify-center flex font-semibold tracking-wide text-lg text-white capitalize transition-colors duration-200 transform bg-primary rounded-md focus:ring focus:ring-green-300 focus:ring-opacity-80 hover:bg-green-500 focus:outline-none focus:bg-green-600"
                >
                  Inicia sesión
                </button>
                <button
                  onClick={() => {
                    setIsShowing(true);
                  }}
                  className="px-4 py-2 justify-center flex gap-5 font-semibold border border-green-100 tracking-wide text-lg text-primary capitalize transition-colors duration-200 transform bg-white shadow-md rounded-md focus:ring focus:ring-green-300 focus:ring-opacity-80 hover:bg-green-100 focus:outline-none focus:bg-green-100"
                >
                  Regístrate
                  <ArrowRightIcon className="w-6 h-6 my-auto" />
                </button>
              </div>
            </div>
          </div>
          <Alert
            isShowing={isShowing}
            setIsShowing={setIsShowing}
            type="warning"
            title="Servidores no disponibles"
            text="Porfavor, inténtelo de nuevo luego"
          />
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
        <p
          className="text-center text-primary font-semibold text-lg"
          data-aos="fade-in"
        >
          Valores
        </p>
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
            <h1
              className="text-3xl font-semibold text-gray-800 lg:text-4xl max-w-lg pb-5"
              data-aos="fade-right"
            >
              Con valores que complementan a los de tu marca
            </h1>
            <p className="text-gray-500 text-xl" data-aos="fade-right">
              Juntos, hacemos la diferencia
            </p>
            <div className="mt-2" data-aos="fade-right">
              <span className="inline-block w-40 h-1 rounded-full bg-green-500" />
              <span className="inline-block w-3 h-1 ml-1 rounded-full bg-green-500" />
              <span className="inline-block w-1 h-1 ml-1 rounded-full bg-green-500" />
            </div>
            <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
              <div
                className="w-full lg:w-1/2 grid grid-cols-1 gap-8 xl:gap-16 md:grid-cols-2"
                data-aos="fade-right"
              >
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
              <div
                className="hidden lg:flex lg:w-1/2 lg:justify-end"
                data-aos="fade-left"
              >
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
      <section id={navData[2].href} className="container px-6 py-10 mx-auto">
        <p
          className="text-center text-primary font-semibold text-lg pb-2"
          data-aos="fade-in"
        >
          Sobre nosotros
        </p>
        <h1
          className="text-4xl text-center text-secondary font-bold "
          data-aos="fade-in"
        >
          ¿Cómo lo hacemos?
        </h1>
        <p
          className="md:text-center text-gray-500 pt-2 px-5 text-lg max-w-3xl mx-auto"
          data-aos="fade-in"
        >
          Combinando nuestra flota de furgonetas totalmente eléctricas y la
          colaboración de nuestra comunidad de{" "}
          <span className="text-secondary font-semibold">
            <span className="text-primary">eco</span>Drivers
          </span>
        </p>
        <div
          className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3"
          data-aos="fade-in"
        >
          <Value
            title="Gestión centralizada"
            text="Agrupamos y organizamos los paquetes en nuestro almacén para su recogida por los ecoDrivers."
          >
            <OfficeBuildingIcon className="h-6 w-6" />
          </Value>

          <Value
            title="Transporte colaborativo"
            text="Los ecoDrivers, de camino a su destino, pasan por el almacén a recoger paquetes en bolsas seguras y convenientes y las entregan en su ciudad de destino."
          >
            <UserGroupIcon className="h-6 w-6" />
          </Value>

          <Value
            className="md:col-span-2 xl:col-span-1"
            title="Última milla eléctrica"
            text="Realizamos las entregas de última milla con nuestra flota de vehículos 100% eléctricos!"
          >
            <LightningBoltIcon className="h-6 w-6" />
          </Value>
        </div>
        <div className="flex flex-col md:flex-row gap-5 pt-10">
          <div className="bg-green-50 space-y-5 p-10" data-aos="fade-right">
            <h1 className="text-5xl font-bold text-secondary">Hablemos!</h1>
            <p className="text-gray-500 text-lg max-w-lg">
              Déjanos tus datos y te contactaremos para darte información o un
              presupuesto personalizado en base a tus necesidades y volumen de
              entregas.
            </p>
            <span className="flex flex-row gap-2 text-gray-500 text-lg">
              <MailIcon className="w-6 h-6 my-auto" />
              <a className="hover:underline" href="mailto:hola@ecodeliver.tech">
                hola@ecodeliver.tech
              </a>
            </span>
          </div>
          <BusinessForm />
        </div>
        <p
          className="text-center text-primary font-semibold pt-10 text-lg"
          data-aos="fade-in"
        >
          Noticias
        </p>
        <h1
          className="text-3xl font-semibold text-center text-secondary lg:text-4xl "
          data-aos="fade-in"
        >
          Nos mencionan
        </h1>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-auto py-10"
          data-aos="fade-in"
        >
          <Article
            type="CaixaBank"
            title="Imagin conecta a inversores con los emprendedores ganadores del ImaginPlanetChallenge"
            text="imagin, la plataforma de servicios digitales y estilo de vida
                impulsada por CaixaBank, ha organizado una sesión Demo Day en la
                que los emprendedores ganadores de la primera edición del
                imaginPlanet Challenge han tenido la oportunidad de presentar
                sus iniciativas ante inversores, business angels, plataformas
                aceleradoras y organizaciones de referencia del ecosistema
                emprendedor."
            extLink="https://www.caixabank.com/comunicacion/noticia/imagin-conecta-a-inversores-con-los-emprendedores-ganadores-del-imaginplanet-challenge_es.html?id=43056#"
            imgLink="/media/articles/caixaBankArticle.jpg"
          />
          <Article
            type="Via empresa"
            title="EcoDeliver, el BlaBlaCar de los paquetes, a punto de empezar a operar en Barcelona"
            text="La startup propone un modelo en el que la persona que tiene previsto hacer un trayecto aprovecha el espacio disponible para transportar paquetes"
            extLink="https://www.viaempresa.cat/es/empresa/ecodeliver-blablacar-paquetes-barcelona_2170552_102.html"
            imgLink="media/pilotTest.jpg"
          />
          <Article
            className="md:col-span-2 lg:col-span-1"
            type="lavanguardia"
            title="ecoDeliver y Kidalos ganan la primera edición del imaginPlanet Challenge"
            text="ecoDeliver y Kidalos han sido elegidos entre los 230 equipos participantes,
             formados por más de 700 jóvenes de 16 universidades españolas que,
              de la mano de imagin, han dado forma a sus ideas durante los tres últimos meses."
            extLink="https://www.lavanguardia.com/vida/20210713/7597222/ecodeliver-kidalos-ganan-primera-edicion-imaginplanet-challenge.html"
            imgLink="/media/articles/lavanguardiaArticle.webp"
          />
        </div>
      </section>
      <section id={navData[3].href} className="max-w-5xl px-5 mx-auto">
        <p
          className="text-center text-primary font-semibold pb-2 text-lg"
          data-aos="fade-in"
        >
          FAQ
        </p>
        <h1
          className="text-center text-4xl lg:text-5xl font-bold md:px-10 mb-8"
          data-aos="fade-in"
        >
          Preguntas frecuentes
        </h1>
        <img
          src="/media/brand/line-3.svg"
          className="hidden xl:block absolute left-0 h-1/6 -translate-x-1/2"
          alt=""
        />
        <div className="divide-y container pb-10">
          <Disclosure
            isOpen={true}
            title={<>¿Cómo se garantiza la seguridad de los envíos? </>}
            text={
              <>
                Tratamos tu envíos con el máximo cariño posible! Los ecoDrivers
                los recogen en bolsas seguras y selladas con una abrazadera
                única, que permite asegurar que no se ha accedido a la mercancía
                desde el momento en que el usuario sale del almacén hasta que lo
                entrega en destino. Además, tenemos la mercancía asegurada con
                un seguro de mercancías.
              </>
            }
          />
          <Disclosure
            title={
              <>
                ¿Cómo se garantiza que los envíos lleguen en el plazo esperado?
              </>
            }
            text={
              <>
                Sabemos que como negocio, tu preocupación es vender y cuidar de
                tus clientes, no la de hacer entregas. Para eso estamos
                nosotros, y nuestra responsabilidad como courier es hacer la
                entrega en el plazo acordado, por lo que incluso en el caso de
                que no haya ecoDrivers disponibles para hacer el transporte de
                una ruta determinada, contamos con medios alternativos de
                transporte que garantizan la entrega y nos permiten seguir
                actuando de acorde a nuestros valores.
              </>
            }
          />
          <Disclosure
            title={<>¿Qué diferencia a ecoDeliver de las otras plataformas?</>}
            text={
              <>
                El sector de envíos y entregas está viviendo un cambio muy
                importante hacia la entrega sostenible, y hay otros servicios
                que ofrecen esta posibilidad. No obstante, aún no existe un
                método alternativo a la comunidad de ecoDeliver para hacer el
                transporte de larga distancia. Nos diferencia este compromiso
                medioambiental, el cuidado hacia las personas que nos
                representan como nuestros repartidores, y nuestro compromiso
                para ofrecer un servicio de calidad que no represente un
                sobrecoste para nuestros clientes.
              </>
            }
          />
          <Disclosure
            title={<>¿ecoDeliver sólo hace entregas para e-commerce?</>}
            text={
              <>
                Pese a que tenemos la infraestructura y capacidad para
                involucrarnos en diferentes tipos de entregas y proyectos, nos
                centramos principalmente en entregas de paquetería pequeña.
              </>
            }
          />
        </div>
        <img
          src="/media/brand/line-1.svg"
          className="hidden xl:block absolute right-0 h-1/3 scale-x-[-1] -translate-y-48 translate-x-1/2"
          alt=""
        />
        <Footer animated={true} />
      </section>
    </>
  );
}
