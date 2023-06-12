import MobileNav from "./MobileNav";
import NavLink from "./NavLink";

export default function Hero() {
  const auth = {
    check: true,
    user: {
      name: "Alvin Rama S.",
    },
  };
  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <MobileNav />
      <div className="hidden py-3 border-b border-white/10 md:block">
        <div className="container">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <a href="#" className="mr-6 font-medium text-white uppercase">
                Brand
              </a>
              <NavLink href="#">Home</NavLink>
              <NavLink href="#">Articles</NavLink>
              <NavLink href="#">Gallery</NavLink>
              <NavLink href="#">About</NavLink>
              <NavLink href="#">Contact</NavLink>
            </div>
            {auth.check ? (
              <div className="flex items-center gap-x-2">
                <NavLink className="flex items-center gap-x-2 hover:bg-transparent" href="#">
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
                </NavLink>
              </div>
            ) : (
              <div className="flex items-center gap-x-2">
                <NavLink href="#">Sign in</NavLink>
                <NavLink href="#">Sign up</NavLink>
              </div>
            )}
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="w-full md:w-2/3">
          <header className="py-4 lg:py-8 md:py-16 text-white">
            <h1 className="text-xl font-bold md:text-3xl">New Revolution</h1>
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
          </header>
        </div>
      </div>
    </div>
  );
}
