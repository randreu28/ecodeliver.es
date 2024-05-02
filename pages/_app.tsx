import "aos/dist/aos.css";
import "../globals.css";

import AOS from "aos";
import { event, GoogleAnalytics, usePageViews } from "nextjs-google-analytics";
import { useEffect } from "react";

import type { AppProps, NextWebVitalsMetric } from "next/app";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import { i18nParticular } from "../i18n";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export function reportWebVitals({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric) {
  event(name, {
    category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  usePageViews();

  const translations = i18nParticular[useRouter().locale as "es" | "en"];

  useEffect(() => {
    AOS.init({
      //...AOS options
    });
  }, []);

  return (
    <>
      <DefaultSeo
        title={translations.metaTitle}
        description={translations.metaDescription}
        openGraph={{
          type: "website",
          images: [
            {
              url: "https://res.cloudinary.com/ecodeliver-es/image/upload/v1659538036/pilotTest_irbv0o.jpg",
              width: 5184 / 4,
              height: 3456 / 4,
              alt: "",
            },
            {
              url: "https://res.cloudinary.com/ecodeliver-es/image/upload/v1659538036/stockImage3_podaof.jpg",
              width: 3000 / 3,
              height: 2000,
              alt: "",
            },
          ],
        }}
        twitter={{
          handle: "@ecoDeliver_es",
          site: "@ecoDeliver_es",
          cardType: "summary_large_image",
        }}
      />
      <GoogleAnalytics />
      <SpeedInsights />
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
