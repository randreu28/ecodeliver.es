import { ArrowRightIcon, MailIcon } from "@heroicons/react/outline";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast, Toaster } from "react-hot-toast";
import Article from "../components/Article";
import BusinessForm from "../components/BusinessForm";
import { PrimaryCloudLogo, SecondaryCloudLogo } from "../components/CloudLogos";
import Disclosure from "../components/Disclousure";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Number from "../components/Number";
import Value from "../components/Value";
import ValueProposition from "../components/ValueProposition";
import { i18nEmpresa, i18nNavBar } from "../i18n";

export default function Empresa() {
  Cookies.set("isBusiness", "true");
  const locale = useRouter().locale as "es" | "en";
  const translations = i18nEmpresa[locale];

  return (
    <>
      <Navbar navData={i18nNavBar[locale].navBusiness} />
      <Toaster position="bottom-left" />

      <section id={i18nNavBar[locale].navBusiness[0].href}>
        <main className="min-h-screen pt-20 grid grid-cols-1 xl:grid-cols-2 gap-1 md:gap-5 p-5 xl:max-w-[100rem] mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/brand/line-4.svg"
            className="hidden xl:block absolute left-0 h-1/6 -translate-x-1/2"
            alt="Decoration line"
          />
          <div
            className="m-auto font-semibold xl:order-2"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <h1 className="text-secondary text-4xl md:text-5xl 2xl:text-6xl max-w-xl xl:max-w-4xl !leading-[1.15] font-semibold">
              {translations.heroSentence}
            </h1>

            <div className="space-y-2 mt-5 text-gray-500">
              <p className="text-lg font-normal pb-2">
                {translations.heroCtaDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-5 w-full">
                <button
                  onClick={() => {
                    toast.error(translations.heroCtaToast);
                  }}
                  className="px-4 py-2 justify-center flex font-semibold tracking-wide text-lg text-white capitalize transition-colors duration-200 transform bg-primary rounded-md focus:ring focus:ring-green-300 focus:ring-opacity-80 hover:bg-green-500 focus:outline-none focus:bg-green-600"
                >
                  {translations.heroCta}
                </button>
                <button
                  onClick={() => {
                    toast.error(translations.heroCtaToast);
                  }}
                  className="px-4 py-2 justify-center flex gap-5 font-semibold border border-green-100 tracking-wide text-lg text-primary capitalize transition-colors duration-200 transform bg-white shadow-md rounded-md focus:ring focus:ring-green-300 focus:ring-opacity-80 hover:bg-green-100 focus:outline-none focus:bg-green-100"
                >
                  {translations.heroCta2}
                  <ArrowRightIcon className="w-6 h-6 my-auto" />
                </button>
              </div>
            </div>
          </div>
          <div
            className="m-auto xl:my-auto xl:mx-0"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <Image
              className="rounded-lg"
              src="/media/stockImage3.jpg"
              alt="logo"
              height={1000 / 2.5}
              width={1500 / 2.5}
              priority
            />
          </div>
        </main>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/brand/line-6.svg"
          className="hidden xl:block absolute -translate-y-56 translate-x-1/3 right-0 h-1/6 scale-x-[-1] -z-10"
          alt="Decoration line"
        />
        <div>
          <h2
            className="text-center text-secondary text-4xl font-bold"
            data-aos="fade-up"
          >
            {translations.logosHeader}
          </h2>
          <PrimaryCloudLogo />
        </div>
      </section>

      <section
        id={i18nNavBar[locale].navBusiness[1].href}
        className="space-y-5"
      >
        <p
          className="text-center text-primary font-semibold text-lg"
          data-aos="fade-in"
        >
          {translations.numbersSubtitle}
        </p>
        <h2
          className="text-4xl text-center text-secondary font-bold "
          data-aos="fade-in"
        >
          {translations.numbersTitle}
        </h2>
        <p
          className="md:text-center text-gray-500 pt-2 px-5 text-lg max-w-3xl mx-auto"
          data-aos="fade-in"
        >
          {translations.numbersDescription}
        </p>
        <div data-aos="fade-in" className="pb-16 pt-10">
          <div className="p-5 flex flex-col lg:flex-row rounded-lg w-fit drop-shadow-lg shadow-lg mx-auto pt-10 bg-white gap-20">
            {translations.numbers.map((number, index) => {
              return (
                <Number title={number.title} key={index}>
                  {number.children}
                </Number>
              );
            })}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/brand/line-3.svg"
          className="hidden xl:block absolute right-0 h-36 translate-y-12 scale-x-[-1] translate-x-1/3"
          alt="Decoration line"
        />

        <div className="bg-green-50">
          <div className="container px-6 py-10 mx-auto">
            <h2
              className="text-3xl font-semibold text-gray-800 lg:text-4xl max-w-lg pb-5"
              data-aos="fade-right"
            >
              {translations.hiwTitle}
            </h2>
            <p className="text-gray-500 text-xl" data-aos="fade-right">
              {translations.hiwDescription}
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
                {translations.hiwValuePropositions.map(
                  (valueProposition, index) => {
                    return (
                      <ValueProposition
                        title={valueProposition.title}
                        description={valueProposition.description}
                        key={index}
                      >
                        {valueProposition.children}
                      </ValueProposition>
                    );
                  }
                )}
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
                  alt="Support image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id={i18nNavBar[locale].navBusiness[2].href}
        className="container px-6 pt-10 mx-auto"
      >
        <p
          className="text-center text-primary font-semibold text-lg pb-2"
          data-aos="fade-in"
        >
          {translations.valuesSubtitle}
        </p>
        <h2
          className="text-4xl text-center text-secondary font-bold "
          data-aos="fade-in"
        >
          {translations.valuesTitle}
        </h2>
        <p
          className="md:text-center text-gray-500 pt-2 px-5 text-lg max-w-3xl mx-auto"
          data-aos="fade-in"
        >
          {translations.valuesDescription}
        </p>
        <div
          className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3"
          data-aos="fade-in"
        >
          {translations.values.map((value, index) => {
            return (
              <Value
                key={index}
                text={value.text}
                title={value.title}
                className={value.className}
              >
                {value.children}
              </Value>
            );
          })}
        </div>
        <div className="flex flex-col md:flex-row gap-5 pt-10">
          <div className="bg-green-50 space-y-5 p-10" data-aos="fade-right">
            <h2 className="text-5xl font-bold text-secondary">
              {translations.ctaTitle}
            </h2>
            <p className="text-gray-500 text-lg max-w-lg">
              {translations.ctaDescription}
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
          {translations.newsSubtitle}
        </p>
        <h2
          className="text-3xl font-semibold text-center text-secondary lg:text-4xl "
          data-aos="fade-in"
        >
          {translations.newsTitle}
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-auto py-10"
          data-aos="fade-in"
        >
          {translations.news.map((article, index) => {
            return (
              <Article
                key={index}
                extLink={article.extLink}
                imgLink={article.imgLink}
                source={article.source}
                title={article.title}
                className={article.className}
              >
                {article.children}
              </Article>
            );
          })}
        </div>
      </section>

      <section
        id={i18nNavBar[locale].navBusiness[3].href}
        className="max-w-5xl px-5 mx-auto"
      >
        <p
          className="text-center text-primary font-semibold pb-2 text-lg"
          data-aos="fade-in"
        >
          {translations.faqSubtitle}
        </p>
        <h2
          className="text-center text-4xl lg:text-5xl font-bold md:px-10 mb-8"
          data-aos="fade-in"
        >
          {translations.faqTitle}
        </h2>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/brand/line-3.svg"
          className="hidden xl:block absolute left-0 h-1/6 -translate-x-1/2"
          alt="Decoration line"
        />
        <div className="divide-y container pb-10">
          {translations.disclousures.map((disclousure, index) => {
            return (
              <Disclosure
                key={index}
                title={disclousure.title}
                isOpen={disclousure.isOpen}
              >
                {disclousure.children}
              </Disclosure>
            );
          })}
        </div>

        <h3
          className="text-center text-2xl font-semibold md:px-10 mb-2"
          data-aos="fade-in"
        >
          {translations.faqHonorableMentions}
        </h3>

        <SecondaryCloudLogo />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/brand/line-1.svg"
          className="hidden xl:block absolute right-0 h-1/3 scale-x-[-1] -translate-y-48 translate-x-1/2"
          alt="Decoration line"
        />
        <Footer />
      </section>
    </>
  );
}
