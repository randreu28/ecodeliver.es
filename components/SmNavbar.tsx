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
    </nav>
  );
}
