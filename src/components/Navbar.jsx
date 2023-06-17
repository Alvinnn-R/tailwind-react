import { Menu, Transition } from "@headlessui/react";
import NavLink from "./NavLink";
import DropdownLink from "./DropdownLink";
import Line from "./Line";
import { Fragment } from "react";

export default function Navbar() {
  const auth = {
    check: false,
    user: {
      name: "Alvin Rama S.",
    },
  };
  return (
    <div className="hidden py-4 border-b border-white/10 md:block">
      <div className="container">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <a href="/" className="mr-6 font-medium text-white uppercase">
              Brand
            </a>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/articles">Articles</NavLink>
            <NavLink href="#">Gallery</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Contact</NavLink>
          </div>
          {auth.check ? (
            <div className="flex items-center gap-x-2">
              {/* <NavLink
                  className="flex items-center gap-x-2 hover:bg-transparent"
                  href="#"
                >
                  {auth.user.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </NavLink> */}

              <Menu as={"div"} className={"relative"}>
                <Menu.Button className="flex text-white items-center gap-x-2 hover:bg-transparent">
                  {auth.user.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    as="div"
                    className="bg-white shadow-sm border absolute right-0 mt-8 top-0 py-1 rounded-lg w-52 overflow-hidden"
                  >
                    <DropdownLink href={"#"}>Dashboard</DropdownLink>
                    <DropdownLink href={"#"}>Horizon</DropdownLink>
                    <Line />
                    <DropdownLink href={"#"}>Favorite</DropdownLink>
                    <DropdownLink href={"#"}>Account Settings</DropdownLink>
                    <DropdownLink href={"#"}>Help</DropdownLink>
                    <DropdownLink href={"#"}>Log Out</DropdownLink>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          ) : (
            <div className="flex items-center gap-x-2">
              <NavLink href="/login">Sign in</NavLink>
              <NavLink href="/register">Sign up</NavLink>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
