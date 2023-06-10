export default function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`${
        className
          ? className
          : "bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-200"
      } border border-transparent px-6 py-2.5 text-sm focus:outline-none focus:ring  font-medium transition duration-300 text-white rounded-xl`}
    >
      {children}
    </button>
  );
}
