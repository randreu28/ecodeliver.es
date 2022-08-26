import Link from "next/link";
import Logo from "./Logo";

export default function Navbar({ className }) {
  return (
    <nav
      className={
        "fixed justify-between flex w-full py-3 px-4 xl:px-[10vh] z-50 bg-white text-secondary text-lg " +
        className
      }
    >
      <Logo />
      <div className="my-auto divide-x divide-gray-300 hidden lg:inline">
        <Link href="/particular">
          <a rel="canonical" className="pr-3 duration-200 hover:opacity-50">
            Particular
          </a>
        </Link>
        <Link href="/empresa">
          <a rel="canonical" className="pl-3 duration-200 hover:opacity-50">
            Empresa
          </a>
        </Link>
      </div>
    </nav>
  );
}
