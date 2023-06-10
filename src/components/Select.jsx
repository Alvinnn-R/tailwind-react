// eslint-disable-next-line react/prop-types
export default function Select({ children, ...props }) {
  return (
    <select
      className="w-full transition duration-200 border-gray-300 shadow-sm rounded-xl focus:ring focus:ring-indigo-100 focus:border-indigo-400"
      {...props}
    >
      {children}
    </select>
  );
}
