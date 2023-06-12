import NavLink from "./NavLink";


export default function Hero() {
  const auth = {
    check: false,
    user: {
      name: "Alvin Rama S.",
    },
  };
  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
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
                <NavLink href="#">{auth.user.name}</NavLink>
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
