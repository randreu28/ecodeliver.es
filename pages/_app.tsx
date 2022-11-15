import "../globals.css";
import "aos/dist/aos.css";

import { GoogleAnalytics, usePageViews, event } from "nextjs-google-analytics";
import AOS from "aos";
import { useEffect } from "react";

import type { NextWebVitalsMetric } from "next/app";
import type { AppProps } from "next/app";

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

  useEffect(() => {
    AOS.init({
      //...AOS options
    });
  }, []);

  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
