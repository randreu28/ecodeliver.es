import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import TextTransition, { presets } from "react-text-transition";
import Article from "../components/Article";
import Button from "../components/Button";
import { PrimaryCloudLogo, SecondaryCloudLogo } from "../components/CloudLogos";
import Disclosure from "../components/Disclousure";
import EcoDriverForm from "../components/EcoDriverForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Number from "../components/Number";
import Step from "../components/Step";
import Value from "../components/Value";
import { i18nNavBar, i18nParticular } from "../i18n";

export default function Particular() {
  const locale = useRouter().locale as "es" | "en";

  Cookies.set("isBusiness", "false");
  const [index, setIndex] = useState<number>(0);

  const WobblyTexts: string[] = i18nParticular[locale].wooblyTexts;
  const translations = i18nParticular[locale];

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => clearTimeout(intervalId);
  }, []);

  const search = useRef<HTMLInputElement>(null!);

  return (
    <>
      <Navbar navData={i18nNavBar[locale].navParticular} />
      <Toaster position="bottom-left" />
      <section
        id={i18nNavBar[locale].navParticular[0].href}
        className="space-y-5"
      >
        <main className="min-h-screen pt-20 grid grid-cols-1 xl:grid-cols-2 gap-1 md:gap-5 p-5">
          {/*  eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/brand/line-6.svg"
            className="hidden xl:block absolute right-1/2"
            alt="Decoration line"
          />
          <div
            className="m-auto font-semibold"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h1 className="text-secondary text-4xl md:text-5xl 2xl:text-6xl max-w-2xl !leading-[1.15]">
              {translations.heroSentence}{" "}
              <TextTransition
                inline={true}
                className="text-primary"
                springConfig={presets.wobbly}
              >
                <span>{WobblyTexts[index % WobblyTexts.length]}</span>
              </TextTransition>
            </h1>
            <div className="space-y-2 lg:mt-10 text-gray-500">
              <p className="text-xl pb-2">{translations.heroCtaDescription}</p>
              <div className="flex flex-row gap-5 flex-wrap">
                <input
                  type="text"
                  className="px-4 py-2 text-lg text-secondary bg-white border border-gray-300 rounded-md focus:border-primary-40 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40 w-full sm:w-fit"
                  placeholder={translations.heroCtaPlaceholder}
                  ref={search}
                />
                <Button
                  className="w-full sm:w-fit"
                  event={() => {
                    toast.error(translations.heroCtaToast);
                    search.current.value = "";
                  }}
                >
                  {translations.heroCta}
                </Button>
              </div>
            </div>
          </div>
          <div
            className="mx-auto md:m-auto"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <Image
              className="rounded-lg"
              src="/media/pilotTest.jpg"
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
          alt="Decoration line"
        />
        <div>
          <h2
            className="text-center text-secodary text-4xl font-semibold"
            data-aos="fade-up"
          >
            {translations.logosHeader}
          </h2>
          <PrimaryCloudLogo />
        </div>
      </section>

      <section
        id={i18nNavBar[locale].navParticular[1].href}
        className="bg-green-50 space-y-10"
      >
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:w-1/2" data-aos="fade-right">
              <div>
                <p className="text-primary font-semibold pb-1">
                  {translations.hiwSubtitle}
                </p>
                <h2 className="text-3xl font-semibold text-gray-800 lg:text-4xl pb-3">
                  {translations.hiwTitle}
                </h2>
                <p className="text-gray-500 text-xl">
                  {translations.hiwDescription}
                </p>
                <div>
                  <span className="inline-block w-40 h-1 rounded-full bg-green-500" />
                  <span className="inline-block w-3 h-1 ml-1 rounded-full bg-green-500" />
                  <span className="inline-block w-1 h-1 ml-1 rounded-full bg-green-500" />
                </div>
              </div>
              {translations.hiwSteps.map((step, index) => {
                return (
                  <Step title={step.title} step={index + 1} key={index}>
                    {step.description}
                  </Step>
                );
              })}
            </div>
            <div
              className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center"
              data-aos="fade-left"
            >
              <Image
                className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                src="/media/stockImage2.jpg"
                alt="Support image"
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
          alt="Decoration line"
        />
        <div data-aos="fade-in">
          <div className="p-5 flex flex-col lg:flex-row rounded-lg w-fit shadow-lg mx-auto pt-10 bg-white gap-20">
            {translations.numbers.map((number, index) => {
              return (
                <Number title={number.title} key={index}>
                  {number.description}
                </Number>
              );
            })}
          </div>
          <p className="text-gray-400 text-xs p-5 text-center">
            {translations.numberDisclaimer}
          </p>
        </div>

        <div className="container px-4 py-10 mx-auto lg:flex lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3" data-aos="fade-right">
            <h2 className="text-5xl font-bold tracking-tight text-gray-800 xl:text-6xl max-w-xl">
              {translations.ctaTitle}
            </h2>
            <p className="text-gray-500 text-xl">
              {translations.ctaDescription}
            </p>
          </div>
          <EcoDriverForm />
        </div>
      </section>

      <section
        id={i18nNavBar[locale].navParticular[2].href}
        className="container px-6 py-10 mx-auto"
      >
        <h2
          className="text-3xl font-semibold text-center text-secondary lg:text-4xl "
          data-aos="fade-in"
        >
          {translations.valuesTitle}
        </h2>
        <p
          className="text-center text-gray-500 pt-2 text-lg"
          data-aos="fade-in"
        >
          {translations.valuesSubtitle}
        </p>

        <div
          className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3"
          data-aos="fade-in"
        >
          {translations.values.map((value, index) => {
            return (
              <Value title={value.title} text={value.text} key={index}>
                {value.children}
              </Value>
            );
          })}
        </div>
      </section>

      <section
        id={i18nNavBar[locale].navParticular[3].href}
        className="container mx-auto px-6"
      >
        <p
          className="text-center text-primary font-semibold pt-2 text-lg"
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
          {translations.articles.map((article, index) => {
            return (
              <Article
                title={article.title}
                className={article.className}
                extLink={article.extLink}
                imgLink={article.imgLink}
                source={article.source}
                key={index}
              >
                {article.children}
              </Article>
            );
          })}
        </div>
      </section>

      <section
        id={i18nNavBar[locale].navParticular[4].href}
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
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/brand/line-3.svg"
          className="hidden xl:block absolute left-0 h-1/6 -translate-x-1/2"
          alt="Decoration line"
        />
        <div className="divide-y container pb-10">
          {translations.disclousures.map((disclousure, index) => {
            return (
              <Disclosure
                title={disclousure.title}
                isOpen={disclousure.isOpen}
                key={index}
              >
                {disclousure.children}
              </Disclosure>
            );
          })}
        </div>

        <h2
          className="text-center text-4xl lg:text-5xl font-bold md:px-10 mb-3"
          data-aos="fade-in"
        >
          {translations.faqHonorableMentions}
        </h2>

        <p
          className="text-center text-gray-500 pb-2 text-lg"
          data-aos="fade-in"
        >
          {translations.faqHonorableMentionsSub}
        </p>

        <SecondaryCloudLogo />
        {/*  eslint-disable-next-line @next/next/no-img-element */}
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
