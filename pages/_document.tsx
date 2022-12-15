import { Head, Html, Main, NextScript } from "next/document";
import Favicon from "../components/Favicon";

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head>
        <Favicon />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
