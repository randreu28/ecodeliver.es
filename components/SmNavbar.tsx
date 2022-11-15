import Link from "next/link";
import Logo from "./Logo";

interface Props {
  className?: string;
}

export default function SmNavbar({ className }: Props) {
  return (
    <nav
      className={
        "fixed justify-between flex w-full py-3 px-4 xl:px-[10vh] z-50 bg-white text-secondary text-lg " +
        className
      }
    >
      <Logo />
      <div className="my-auto divide-x divide-gray-300 hidden lg:inline">
        <Link
          href="/particular"
          rel="canonical"
          className="pr-3 duration-200 hover:opacity-50"
        >
          Particular
        </Link>
        <Link
          href="/empresa"
          rel="canonical"
          className="pl-3 duration-200 hover:opacity-50"
        >
          Empresa
        </Link>
      </div>
    </nav>
  );
}
