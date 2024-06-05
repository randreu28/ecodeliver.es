import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import ThemeToggler from "./ThemeToggler";
import { cn } from "@/utils/utils";

type Props = {
  links: {
    href: string;
    label: string;
    active: boolean;
  }[];
};

export function Navbar({ links }: Props) {
  return (
    <Menu as="div" className="relative lg:hidden">
      <ThemeToggler className="mr-4" />
      <MenuButton className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
        <svg
          className="block h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </MenuButton>
      <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
        <div className="py-1">
          {links.map((link) => (
            <MenuItem key={link.href}>
              <a
                href={link.href}
                className={cn([
                  "block px-4 py-2 text-sm",
                  link.active && "text-primary font-semibold",
                ])}
              >
                {link.label}
              </a>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
