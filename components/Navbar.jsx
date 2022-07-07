import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [section, setSection] = useState("inicio");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
      sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const sectionTop = section.offsetTop - window.innerHeight * 0.5;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY <= sectionBottom) {
          setSection(sectionId);
        }
      });
    });
  }, [setSection]);

  const router = useRouter();

  return (
    <nav className="fixed justify-between flex w-full py-3 px-4 xl:px-[10vh] z-50 bg-white text-secondary text-lg">
      <div className=" flex-row space-x-8 flex">
        <Link href="/">
          <a className="flex flex-row">
            <Image
              src="/media/brand/logo.svg"
              width={50}
              height={50}
              alt="logo"
              priority
            />
            <h2 className="my-auto pl-3 text-2xl font-semibold">
              <span className="text-primary">eco</span>
              <span>Deliver</span>
            </h2>
          </a>
        </Link>
        <ul className="my-auto space-x-8 hidden lg:inline">
          <a
            href="#inicio"
            className={
              section === "inicio"
                ? "text-primary duration-200 hover:opacity-50"
                : " duration-200 hover:opacity-50"
            }
          >
            Inicio
          </a>
          <a
            href="#como-funciona"
            className={
              section === "como-funciona"
                ? "text-primary duration-200 hover:opacity-50"
                : " duration-200 hover:opacity-50"
            }
          >
            Cómo funciona
          </a>
          <a
            href="#valores"
            className={
              section === "valores"
                ? "text-primary duration-200 hover:opacity-50"
                : " duration-200 hover:opacity-50"
            }
          >
            Valores
          </a>
          <a
            href="#noticias"
            className={
              section === "noticias"
                ? "text-primary duration-200 hover:opacity-50"
                : " duration-200 hover:opacity-50"
            }
          >
            Noticias
          </a>
          <a
            href="#faq"
            className={
              section === "faq"
                ? "text-primary duration-200 hover:opacity-50"
                : " duration-200 hover:opacity-50"
            }
          >
            FAQ
          </a>
        </ul>
      </div>
      <div className="my-auto divide-x divide-gray-300 hidden lg:inline">
        <Link href="/particular">
          <a
            className={
              router.asPath.includes("/particular")
                ? "pr-3 text-primary duration-200 hover:opacity-50"
                : "pr-3 duration-200 hover:opacity-50"
            }
          >
            Particular
          </a>
        </Link>
        <Link href="/empresa">
          <a
            className={
              router.asPath.includes("/empresa")
                ? "pl-3 text-primary duration-200 hover:opacity-50"
                : "pl-3 duration-200 hover:opacity-50"
            }
          >
            Empresa
          </a>
        </Link>
      </div>
    </nav>
  );
}
