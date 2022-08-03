import Navbar from "../components/Navbar";
import Webholder from "../components/Webholder";
import Head from "next/head";
import Cookies from "js-cookie";

export default function Empresa() {
  Cookies.set("isBusiness", true);

  const navData = [
    { name: "Inicio", href: "inicio" },
    { name: "Cómo funciona", href: "como-funciona" },
    { name: "Valores", href: "valores" },
    { name: "Noticias", href: "noticias" },
    { name: "FAQ", href: "faq" },
  ];

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
      <Webholder />
      {/* <Navbar navData={navData} />
      <section id={navData[0].href} className="h-screen flex bg-slate-200">
        <h1 className="m-auto text-5xl">{navData[0].name}</h1>
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
      <section id={navData[4].href} className="h-screen flex bg-slate-200">
        <h1 className="m-auto text-5xl">{navData[4].name}</h1>
      </section> */}
    </>
  );
}
