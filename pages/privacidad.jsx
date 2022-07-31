import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Insight from "../components/Insight";
import content from "./privacidad.mdx";

const components = { Insight };

export default function Privacidad({ source }) {
  return (
    <div className="container">
      <MDXRemote {...source} components={components} />
    </div>
  );
}

export async function getStaticProps() {
  const mdxSource = await serialize(content);
  return { props: { source: mdxSource } };
}
