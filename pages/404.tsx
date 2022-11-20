import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import SmNavbar from "../components/SmNavbar";
import { i18n404 } from "../i18n";

export default function Error() {
  const translations = i18n404[useRouter().locale as "es" | "en"];
  return (
    <>
      <Head>
        <title>{translations.metaTitle}</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <SmNavbar />
      <div className="h-screen flex flex-col lg:flex-row pt-20 p-10 md:p-20 gap-10 md:gap-20">
        <div className="m-auto text-gray-600 text-center space-y-5">
          <h1 className="text-primary text-5xl lg:text-8xl font-extrabold">
            {translations.title}
          </h1>
          <h2 className="text-3xl text-gray-600 font-bold">
            {translations.subtitle}
          </h2>
          <p className="pt-5 text-xl max-w-lg">{translations.description}</p>
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
