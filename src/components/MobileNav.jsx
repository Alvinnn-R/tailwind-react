// import { useState } from "react";
import { Fragment } from "react";
import ResponsiveNavLink from "./ResponsiveNavLink";
import { Menu, Transition } from "@headlessui/react";
import Line from "./Line";

export default function MobileNav() {
  // const [open, setOpen] = useState(true);
  const auth = {
    check: true,
    user: {
      name: "Alvin Rama S.",
    },
  };
  return (
    <Menu
      as={"div"}
      className="w-full flex md:hidden items-center justify-between py-2.5 px-4 border-b border-gray-700"
    >
      <a href="#" className="mr-6 font-medium text-white uppercase">
        Brand
      </a>
      {/* Hero */}
      {/* <div
          onClick={() => setOpen(false)}
          className={`${
            open ? "block" : "hidden"
          } bg-transparent absolute w-full h-full inset-0`}
        ></div> 
        
        <button
          onClick={() => setOpen((open) => !open)}
          className="focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>*/}

      <Menu.Button className="focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </Menu.Button>
      {/* Hero */}
      {/* <div
          className={`${
            open ? "block" : "hidden"
          } bg-white absolute right-0 mr-12 mt-4 top-0 py-1 rounded-lg w-52 overflow-hidden`}
        >
          <ResponsiveNavLink href="#">Home</ResponsiveNavLink>
          <ResponsiveNavLink href="#">Articles</ResponsiveNavLink>
          <ResponsiveNavLink href="#">Gallery</ResponsiveNavLink>
          <ResponsiveNavLink href="#">About</ResponsiveNavLink>
          <ResponsiveNavLink href="#">Contact</ResponsiveNavLink>
          <div className="w-full h-px bg-gray-300 my-1" />
          <ResponsiveNavLink href="#">Sign In</ResponsiveNavLink>
          <ResponsiveNavLink href="#">Sign Up</ResponsiveNavLink>
        </div> */}

      {/* Headles UI */}
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
          className="shadow-sm border bg-white absolute right-0 mr-12 mt-3 top-0 py-1 rounded-lg w-52 overflow-hidden"
        >
          <ResponsiveNavLink href="#">Home</ResponsiveNavLink>
          <ResponsiveNavLink href="#">Articles</ResponsiveNavLink>
          <ResponsiveNavLink href="#">Gallery</ResponsiveNavLink>
          <ResponsiveNavLink href="#">About</ResponsiveNavLink>
          <ResponsiveNavLink href="#">Contact</ResponsiveNavLink>
          <Line />
          {auth.check ? (
            <>
              <ResponsiveNavLink href={"#"}>Dashboard</ResponsiveNavLink>
              <Line />
              <ResponsiveNavLink href={"#"}>{auth.user.name}</ResponsiveNavLink>
              <ResponsiveNavLink href={"#"}>Account Settings</ResponsiveNavLink>
              <Line />
              <ResponsiveNavLink href={"#"}>Help</ResponsiveNavLink>
              <Line />
              <ResponsiveNavLink href={"#"}>Log Out</ResponsiveNavLink>
            </>
          ) : (
            <>
              <ResponsiveNavLink href="#">Sign In</ResponsiveNavLink>
              <ResponsiveNavLink href="#">Sign Up</ResponsiveNavLink>
            </>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
