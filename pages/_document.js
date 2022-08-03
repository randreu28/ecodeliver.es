import { Html, Head, Main, NextScript } from "next/document";
import Favicon from "../components/Favicon";
import SeoTags from "../components/SeoTags";

export default function Document() {
  return (
    <Html lang="es" className="scroll-smooth">
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
