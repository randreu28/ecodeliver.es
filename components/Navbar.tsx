import { useEffect, useState, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./Logo";

interface Props {
  navData: {
    name: string;
    href: string;
  }[];
}

export default function Navbar({ navData }: Props) {
  const [section, setSection] = useState("inicio");
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
      sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const sectionTop = section.offsetTop - window.innerHeight * 0.5;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY <= sectionBottom) {
          setSection(sectionId!);
        }
      });
    });
  }, [setSection]);

  const router = useRouter();

  return (
    <div
      data-nosnippet
      className="fixed justify-between flex w-full py-3 px-4 xl:px-[10vh] z-50 bg-white text-secondary text-lg"
    >
      <div data-nosnippet className="flex-row space-x-8 flex">
        <Logo />
        <ul className="my-auto space-x-8 hidden lg:inline">
          {navData.map((currentSection) => {
            return (
              <a
                href={"#" + currentSection.href}
                key={currentSection.name}
                className={
                  section === currentSection.href
                    ? "text-primary duration-200 hover:opacity-50"
                    : " duration-200 hover:opacity-50"
                }
              >
                {currentSection.name}
              </a>
            );
          })}
        </ul>
      </div>
      <div className="my-auto divide-x divide-gray-300 hidden lg:inline">
        <Link
          href="/particular"
          rel="canonical"
          className={
            router.asPath.includes("/particular")
              ? "pr-3 text-primary duration-200 hover:opacity-50"
              : "pr-3 duration-200 hover:opacity-50"
          }
        >
          Particular
        </Link>
        <Link
          href="/empresa"
          rel="canonical"
          className={
            router.asPath.includes("/empresa")
              ? "pl-3 text-primary duration-200 hover:opacity-50"
              : "pl-3 duration-200 hover:opacity-50"
          }
        >
          Empresa
        </Link>
      </div>
      <Popover className="lg:hidden my-auto">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full lg:w-auto">
              <div className="-mr-2 flex items-center">
                <Popover.Button className="bg-myDark rounded-md p-2 inline-flex items-center justify-center hover:opacity-75focus:outline-none focus:ring-2 focus:ring-inset focus:ring-myPrimary">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
        </nav>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right"
          >
            <div className="rounded-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-white">
              <div className="px-5 pt-4 flex items-center justify-between">
                <Logo />
                <div className="-mr-2">
                  <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center  hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-myPrimary">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1 divide-y">
                <div>
                  {navData.map((currentSection) => {
                    return (
                      <Popover.Button
                        key={currentSection.name}
                        className={
                          section === currentSection.href
                            ? "block text-lg font-medium px-3 py-2 hover:opacity-75 duration-300 text-primary"
                            : "block text-lg font-medium px-3 py-2 hover:opacity-75 duration-300"
                        }
                        href={"#" + currentSection.href}
                        as="a"
                      >
                        {currentSection.name}
                      </Popover.Button>
                    );
                  })}
                </div>

                <div>
                  <Link
                    href="/particular"
                    className={
                      router.asPath.includes("/particular")
                        ? "block text-lg font-medium px-3 py-2 hover:opacity-75 duration-300 text-primary"
                        : "block text-lg font-medium px-3 py-2 hover:opacity-75 duration-300"
                    }
                  >
                    Particular
                  </Link>
                  <Link
                    href="/empresa"
                    className={
                      router.asPath.includes("/empresa")
                        ? "block text-lg font-medium px-3 py-2 hover:opacity-75 duration-300 text-primary"
                        : "block text-lg font-medium px-3 py-2 hover:opacity-75 duration-300"
                    }
                  >
                    Empresa
                  </Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
