export default function Guest({ children, tittle, cardClassName }) {
  return (
    <div className="flex items-center justify-center min-h-screen antialiased tracking-tighter text-gray-800 bg-gray-100">
      <div className={`${cardClassName ? cardClassName : 'w-1/3'}`}>
        <div className="p-4 overflow-hidden bg-white border shadow-sm rounded-2xl">
          <div className="px-6 py-3 border-b bg-gray-50/50">
            <h1 className="font-medium capitalize">{tittle}</h1>
          </div>
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
