import { useState } from "react";
import ResponsiveNavLink from "./ResponsiveNavLink";

export default function MobileNav() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div className=" flex md:hidden items-center justify-between py-2.5 px-4 border-b border-gray-700">
        <a href="#" className="mr-6 font-medium text-white uppercase">
          Brand
        </a>
        <div
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
        </button>
        <div
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
        </div>
      </div>
    </div>
  );
}
