import { Menu, Transition } from "@headlessui/react";
import MobileNav from "./MobileNav";
// import NavLink from "./NavLink";
// import DropdownLink from "./DropdownLink";
// import Line from "./Line";
// import { Fragment } from "react";
import Navbar from "./Navbar";

const Title = ({ children }) => (
  <h1 className="text-xl font-bold md:text-3xl text-white">{children}</h1>
);

const Body = ({ children }) => <div>{children}</div>;

const Hero = ({ className, children }) => {
  // const auth = {
  //   check: false,
  //   user: {
  //     name: "Alvin Rama S.",
  //   },
  // };
  return (
    <div
      className={`${className} bg-gradient-to-br from-sky-950 via-slate-800 to-blue-950 mb-8`}
    >
      <MobileNav />

      <Navbar />
      <div className="container">
        <div className="w-full md:w-2/3">
          {/* <header className="py-4 lg:py-8 md:py-16 text-white">
            <p className="mt-4 mb-6 text-base font-light leading-relaxed md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <a
                href="#"
                className="font-medium underline decoration-sky-500 text-sky-400"
              >
                Dolorem quam
              </a>
              , recusandae quis dolorum veritatis nulla, nemo consequuntur
              temporibus quisquam expedita libero est facere ipsum laboriosam
              eveniet itaque. Rem, dicta temporibus?
            </p>
            <a
              href="#"
              className="bg-white hover:bg-gray-50 hover:text-blue-600 transition duration-200 text-gray-900 md:px-6 px-4 py-2 text-sm md:text-tiny md:py-2.5 rounded-xl font-medium inline-flex shadow-inner shadow-gray-300 md:shadow-gray-400"
            >
              Browse
            </a>
          </header> */}
          {children}
        </div>
      </div>
    </div>
  );
};
Hero.Title = Title;
Hero.Body = Body;

export default Hero;
