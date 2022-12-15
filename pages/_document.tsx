import { Head, Html, Main, NextScript } from "next/document";
import Favicon from "../components/Favicon";
import SeoTags from "../components/SeoTags";

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head>
        <SeoTags />
        <Favicon />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
