export default function Guest({ children, tittle, cardClassName }) {
  return (
    <div className="flex items-center justify-center antialiased tracking-tighter text-gray-800 bg-gray-100 md:min-h-screen">
      <div className={`${cardClassName ? cardClassName : 'lg:w-1/3'}w-full md:w-2/3`}>
        <div className="overflow-hidden bg-white md:shadow-sm md:border md:rounded-2xl">
          <div className="px-6 py-3 border-b bg-gray-50/50">
            <h1 className="font-medium capitalize">{tittle}</h1>
          </div>
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
