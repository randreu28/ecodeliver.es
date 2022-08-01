import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Insight from "../components/Insight";
import content from "./privacidad.md";
import SmNavbar from "../components/SmNavbar";
import Footer from "../components/Footer";
import WebHolder from "../components/Webholder";

const components = { Insight };

export default function Privacidad({ source }) {
  return (
    <>
      <WebHolder />
      {/* <SmNavbar />
      <div className="prose prose-lg max-w-5xl space-y-10 container pt-20 p-5 mx-auto">
        <MDXRemote {...source} components={components} />
      </div>
      <Footer className="max-w-5xl m-auto" animated={false} /> */}
    </>
  );
}

export async function getStaticProps() {
  const mdxSource = await serialize(content);
  return { props: { source: mdxSource } };
}
