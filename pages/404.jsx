import Head from "next/head";
import Image from "next/image";
import SmNavbar from "../components/SmNavbar";

export default function Error() {
  return (
    <>
      <Head>
        <title>Página no encontrada</title>
      </Head>
      <SmNavbar />
      <div className="h-screen flex flex-col lg:flex-row pt-20 p-10 md:p-20 gap-10 md:gap-20">
        <div className="m-auto text-gray-600 text-center space-y-5">
          <h1 className="text-primary text-5xl lg:text-8xl font-extrabold">
            Error 404
          </h1>
          <h2 className="text-3xl text-gray-600 font-bold">
            No hemos encontrado lo que buscabas...
          </h2>
          <p className="pt-5 text-xl max-w-lg">
            Para que nos sirva de consuelo, te presentamos a Roberto, la mascota
            oficial de ecoDeliver :)
          </p>
        </div>
        <div className="m-auto">
          <Image
            alt=""
            className="object-contain pb-10 lg:pb-0 w-[500px] xl:w-[600px] mx-auto"
            src="/media/Roberto.png"
            width={700}
            height={700}
          />
        </div>
      </div>
    </>
  );
}
