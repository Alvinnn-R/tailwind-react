export default function Label({ forInput, children }) {
  return (
    <label htmlFor={forInput} className="block mb-1 text-gray-700 capitalize">
      {children}
    </label>
  );
}
