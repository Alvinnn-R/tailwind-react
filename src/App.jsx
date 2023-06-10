// import "./App.css";
import Button from "./components/Button";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Layout>
      {/*1 <div> Hello world </div> */}

      {/*2 Component Pertama/Simple*/}
      <div className="max-w-xl">
        <div className="overflow-hidden bg-white bordershadow-sm rounded-xl">
          <header className="border-b px-4 py-2.5 bg-gray-50/50 flex items-center justify-between">
            <div>
              <h1 className="font-medium">Card Title</h1>
              <span className="text-gray-500">Lorem ipsum dolor sit.</span>
            </div>
            <a
              href="#"
              className="px-5 py-2.5 hover:bg-pink-600 focus:outline-none focus:ring focus:ring-pink-100 transition duration-200 text-white bg-pink-500 rounded-xl font-medium text-sm"
            >
              New Task
            </a>
          </header>
          <section className="px-4 py-2.5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
            nostrum quidem accusamus blanditiis illo exercitationem placeat
            maxime delectus labore nobis odio, possimus adipisci eum sequi
            accusantium. Doloremque ut porro est.
          </section>
          <footer className="border-t px-4 py-2.5 text-gray-500 bg-gray-50 bg-opacity-50">
            Lorem ipsum dolor sit.
          </footer>
        </div>
      </div>

      {/*3 Komponen Berulang */}
      <div className="space-x-2">
        <button className="px-6 py-2.5 text-sm focus:outline-none focus:ring focus:ring-blue-200 font-medium transition duration-300 bg-blue-600 text-white rounded hover:bg-blue-700">
          Primay
        </button>

        <button className="px-6 py-2.5 text-sm focus:outline-none focus:ring focus:ring-pink-200 font-medium transition duration-300 bg-pink-500 text-white rounded hover:bg-pink-600">
          Primary
        </button>
      </div>

      {/* apply */}
      <div className="space-x-2">
        <button className="btn btn-primary">Primay</button>

        <button className="btn btn-pink">Primary</button>
      </div>

      {/* Component */}
      <div className="space-x-2">
        <Button>Primary 2</Button>
        <Button className={"bg-pink-600 hover:bg-pink-700 focus:ring-pink-200"}>
          Pink
        </Button>
        <Button
          className={
            "text-black border-gray-300 bg-white-600 hover:bg-gray-100 focus:ring-gray-200"
          }
        >
          White
        </Button>
      </div>
      <h1>Test 1</h1>
    </Layout>
  );
}
