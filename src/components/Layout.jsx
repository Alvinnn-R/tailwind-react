export default function Layout({ children }) {
  return (
    // <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
    <div className="flex items-center justify-center min-h-screen font-sans antialiased tracking-tighter bg-gray-100">
      {children}
    </div>
  );
}
