export default function NavLink({ className, href, children }) {
  return (
    <a
      href={href}
      className={`${
        className ? className : ""
      } font-medium lg:text-tiny md:text-sm px-4 py-2 text-gray-300 rounded-lg hover:text-white hover:bg-gray-700/40`}
    >
      {children}
    </a>
  );
}
