import { DownloadIcon } from "@heroicons/react/outline";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import CardCTA from "../components/CardCTA";
import Footer from "../components/Footer";
import SmNavbar from "../components/SmNavbar";
import { i18IdentidadCorporativa } from "../i18n";

export default function Identidad() {
  const translations =
    i18IdentidadCorporativa[useRouter().locale as "es" | "en"];
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <SmNavbar />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/media/brand/line-1.svg"
        className="hidden xl:block absolute translate-x-1/3 right-0 h-64 translate-y-32 scale-x-[-1]"
        alt=""
      />
      <div className="max-w-5xl space-y-10 container pt-20 p-5 mx-auto text-secondary">
        <h1 className="text-5xl font-semibold">{translations.title}</h1>
        <p className="text-gray-500 text-xl">{translations.description}</p>
        <p className="text-gray-500 text-xl">{translations.plug}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-auto pb-10">
          {translations.cards.map((card, index) => {
            return (
              <CardCTA
                href={card.href}
                key={index}
                title={card.title}
                imgLink={card.imgLink}
                cta={
                  <>
                    <DownloadIcon className="w-6 h-6" /> {translations.call}
                  </>
                }
                download={card.download}
              >
                {card.children}
              </CardCTA>
            );
          })}
        </div>
      </div>
      {/*  eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/media/brand/line-3.svg"
        className="hidden xl:block absolute left-0 h-32 -translate-y-72 -translate-x-1/2"
        alt=""
      />
      <Footer className="top-0" />
    </>
  );
}
