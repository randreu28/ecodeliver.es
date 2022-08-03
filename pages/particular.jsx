import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import Cookies from "js-cookie";
import Button from "../components/Button";
import {
  BadgeCheckIcon,
  FingerPrintIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserAddIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import Value from "../components/Value";
import Article from "../components/Article";
import Disclosure from "../components/Disclosure";
import Footer from "../components/Footer";
import Alert from "../components/Alert";
import CloudLogo from "../components/CloudLogo";
import { useState, useRef, useEffect } from "react";
import Form from "../components/Form";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Particular() {
  Cookies.set("isBusiness", false);

  const navData = [
    { name: "Inicio", href: "inicio" },
    { name: "Cómo funciona", href: "como-funciona" },
    { name: "Valores", href: "valores" },
    { name: "Noticias", href: "noticias" },
    { name: "FAQ", href: "faq" },
  ];

  const [isShowing, setIsShowing] = useState(false);
  const search = useRef();

  //Animations
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Particular</title>
      </Head>
      <Navbar navData={navData} />

      <section id={navData[0].href} className="space-y-5">
        <main className="min-h-screen pt-20 flex flex-row flex-wrap gap-1 md:gap-5 p-5">
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
            <h1 className="text-secondary text-4xl md:text-6xl max-w-3xl !leading-[1.15]">
              Viaja y únete a la comunidad de entregas de paquetería{" "}
              <span className="text-primary">100% sostenible</span>
            </h1>
            <div className="space-y-2 mt-10 text-gray-500">
              <p className="text-xl pb-2">Haz el seguimiento de tu paquete:</p>
              <div className="flex flex-row gap-5 flex-wrap">
                <input
                  type="text"
                  className="px-4 py-2 text-lg text-secondary bg-white border border-gray-300 rounded-md focus:border-primary-40 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Número de seguimiento"
                  ref={search}
                />
                <Button
                  text="Busca"
                  event={() => {
                    setIsShowing(true);
                    search.current.value = "";
                  }}
                />
              </div>
            </div>
          </div>
          <Alert
            type="warning"
            title="Servidores no disponibles"
            text="Porfavor, intente de nuevo luego"
            isShowing={isShowing}
            setIsShowing={setIsShowing}
          />
          <div
            className="mx-auto md:m-auto"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <Image
              className="hidden rounded-lg"
              src="/media/heroImage.jpg"
              alt="logo"
              height={1000 / 3}
              width={1500 / 3}
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
                src="/media/howItWorks.jpg"
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
          <Form />
        </div>
      </section>

      <section id={navData[2].href} className="container px-6 py-10 mx-auto">
        <h1
          className="text-3xl font-semibold text-center text-secondary lg:text-4xl "
          data-aos="fade-in"
        >
          Valores de nuestro servicio
        </h1>
        <p
          className="text-center text-gray-500 pt-2 text-lg"
          data-aos="fade-in"
        >
          Porque el <b className="text-primary">por qué</b> importa
        </p>

        <div
          className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3"
          data-aos="fade-in"
        >
          <Value
            title={
              <>
                Somos{" "}
                <span className="text-primary font-semibold">eco-friendly</span>
              </>
            }
            text={
              <>
                Ya que siendo un ecoDriver ibas a viajar de todas formas, evitas
                que un camión tenga que transportar esos paquetes.
              </>
            }
          >
            <FingerPrintIcon className="h-6 w-6" />
          </Value>

          <Value
            title={
              <>
                Cuidamos de las{" "}
                <span className="text-primary font-semibold">personas</span>
              </>
            }
            text={
              <>
                Transportamos paquetes pero tratamos con personas. Por eso, te
                cuidamos tanto a ti como a nuestros repartidores.
              </>
            }
          >
            <UserGroupIcon className="h-6 w-6" />
          </Value>

          <Value
            title={
              <>
                Creamos{" "}
                <span className="text-primary font-semibold">comunidad</span>
              </>
            }
            text={
              <>
                Al ofrecer un servicio en comunidad, compartimos recursos y
                salimos ganando todos!
              </>
            }
          >
            <UserAddIcon className="h-6 w-6" />
          </Value>

          <Value
            title={
              <>
                Muy <span className="text-primary font-semibold">práctico</span>
              </>
            }
            text={
              <>
                Disrumpimos el mercado, pero sin disrumpir tu viaje! Nos
                centramos en que para ti todo vaya <i>sobre ruedas</i>.
              </>
            }
          >
            <SparklesIcon className="h-6 w-6" />
          </Value>

          <Value
            title={
              <>
                <span className="text-primary font-semibold">
                  Transparencia
                </span>{" "}
                ante todo
              </>
            }
            text={
              <>
                Al ofrecer un servicio en comunidad, compartimos recursos y
                salimos ganando todos!
              </>
            }
          >
            <BadgeCheckIcon className="w-6 h-6" />
          </Value>

          <Value
            title={
              <>
                Cuidando de tu{" "}
                <span className="text-primary font-semibold">seguridad</span>
              </>
            }
            text={
              <>
                Cuidamos de los ecoDrivers y de los paquetes, verificando que se
                cumplen nuestros protocolos de seguridad.
              </>
            }
          >
            <ShieldCheckIcon className="h-6 w-6" />
          </Value>
        </div>
      </section>

      <section id={navData[3].href} className="container mx-auto px-6">
        <p
          className="text-center text-primary font-semibold pt-2 text-lg"
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
            type="Diari Ara"
            title="Imagin premia a un 'Blablacar' de paquetería y una plataforma de juguetes compartidos"
            text="La primera competición de emprendimiento medioambiental de Imagin, la
                plataforma para jóvenes de CaixaBank, ya tiene ganadores. Se trata
                de una solución que pretende utilizar vehículos privados para
                transportar paquetes y de un proyecto que plantea alquilar juguetes
                en lugar de comprarlas. Los jóvenes detrás de eCodeliver y
                Kidalos, como se llaman estas dos ideas de empresa, han
                marchado a un laboratorio en Lanzarote donde expertos de la misma
                Imagin y un equipo de profesionales dedicados al emprendimiento, la
                sostenibilidad y la innovación les ayudarán a desarrollar una
                primera versión del producto que intentan construir."
            extLink="https://www.ara.cat/economia/imagin-premia-blablacar-paqueteria-plataforma-joguines-compartides_1_4052007.html"
            imgLink="media/articles/araArticle.webp"
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

      <section id={navData[4].href} className="max-w-5xl px-5 mx-auto">
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
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/brand/line-3.svg"
          className="hidden xl:block absolute left-0 h-1/6 -translate-x-1/2"
          alt=""
        />
        <div className="divide-y container pb-10">
          <Disclosure
            isOpen={true}
            title={<>¿Cuándo podré participar como ecoDriver? </>}
            text={
              <>
                Actualmente estamos en las etapas finales de desarrollo y
                nuestra aplicación estará disponible muy pronto! Además estamos
                realizando pruebas piloto para las que tu colaboración será muy
                bienvenida. Déjanos tu correo electrónico para que te avisemos
                del launch ;)
              </>
            }
          />
          <Disclosure
            title={<>¿El contenido de los paquetes es seguro?</>}
            text={
              <>
                Si. Sólo transportamos paquetes de ecommerce (tiendas online) y
                el contenido es conocido y declarado para cada paquete. El
                contenido son artículos de cosmética, calzado, ropa y no se
                transportan paquetes con contenido peligroso.
              </>
            }
          />
          <Disclosure
            title={
              <>
                ¿Cómo se garantiza la seguridad tanto del ecoDriver como de los
                paquetes?
              </>
            }
            text={
              <>
                Como ecoDriver, eres un miembro verificado de nuestra comunidad
                con tu identificación. Además, los paquetes se transportarán en
                bolsas selladas hechas a medida, lo que garantiza que nadie más
                que el remitente y el receptor puedan acceder a su interior a
                menos que la bolsa se rompa. De esta forma, podemos garantizar
                la seguridad del ecoDriver y del paquete gracias a nuestro
                seguimiento constante de todo el proceso.
              </>
            }
          />
          <Disclosure
            title={<>¿Realizar un transporte es legal?</>}
            text={
              <>
                Si. De la misma manera en que funcionan otros servicios
                parecidos como BlaBlaCar, al tratarse de un transporte no
                profesional (donde no se genera un beneficio neto) no es
                necesario contar con un título de transporte y se considera un
                transporte particular, de toda la vida. .
              </>
            }
          />
          <Disclosure
            title={
              <>¿Cuánto dinero se paga por hacer un viaje como ecoDriver?</>
            }
            text={
              <>
                La remuneración se calcula teniendo en cuenta diferentes
                parámetros, como el número de paquetes, la distancia recorrida,
                el tipo de transporte… No obstante, en ningún caso se tendrá una
                remuneración que sobrepase el coste del viaje.
              </>
            }
          />
        </div>
        {/*  eslint-disable-next-line @next/next/no-img-element */}
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
