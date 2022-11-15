import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex flex-row">
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
    </Link>
  );
}
