import Navbar from "../components/Navbar";
import Head from "next/head";
import Cookies from "js-cookie";

export default function Particular() {
  Cookies.set("isBusiness", false);
  return (
    <>
      <Head>
        <title>Particular</title>
        {/* <body className="bg-neutral" /> */}
      </Head>
      <Navbar />
      <section id="inicio" className="h-screen flex bg-slate-200">
        <h1 className="m-auto text-5xl">inicio</h1>
      </section>
      <section id="como-funciona" className="h-screen flex bg-slate-300">
        <h1 className="m-auto text-5xl">como-funciona</h1>
      </section>
      <section id="valores" className="h-screen flex bg-slate-200">
        <h1 className="m-auto text-5xl">valores</h1>
      </section>
      <section id="noticias" className="h-screen flex bg-slate-300">
        <h1 className="m-auto text-5xl">noticias</h1>
      </section>
      <section id="faq" className="h-screen flex bg-slate-200">
        <h1 className="m-auto text-5xl">faq</h1>
      </section>
    </>
  );
}
