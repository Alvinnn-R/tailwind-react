// import "./App.css";
import Button from "./components/Button";
import Layout from "./components/Layout";

export default function App() {
  return (
    // <Layout>
    //   {/*1 <div> Hello world </div> */}

    //   {/*2 Component Pertama/Simple*/}
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

    //   {/*3 Komponen Berulang */}
      <div className="space-x-2">
        <button className="px-6 py-2.5 text-sm focus:outline-none focus:ring focus:ring-blue-200 font-medium transition duration-300 bg-blue-600 text-white rounded hover:bg-blue-700">
          Primay
        </button>

        <button className="px-6 py-2.5 text-sm focus:outline-none focus:ring focus:ring-pink-200 font-medium transition duration-300 bg-pink-500 text-white rounded hover:bg-pink-600">
          Primary
        </button>
      </div> 

    //   {/* apply */}
       <div className="space-x-2">
        <button className="btn btn-primary">Primay</button>

        <button className="btn btn-pink">Primary</button>
      </div> 

    //   {/* Component */}
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
    </Layout>

    //Responsife Design
    <div className="grid grid-cols-3 gap-10">
      <div className="flex items-center justify-center w-full text-white bg-rose-500 aspect-video sm:bg-blue-600 md:bg-yellow-500 lg:bg-pink-600 xl:bg-black 2xl:bg-indigo-600">Tailwinds CSS</div>
      <div className="flex items-center justify-center w-full text-white bg-rose-500 aspect-video">Tailwinds CSS</div>
      <div className="flex items-center justify-center w-full text-white bg-rose-500 aspect-video">Tailwinds CSS</div>
    </div>

    Custom Font
    <div className="flex items-center justify-center min-h-screen font-sans antialiased tracking-tighter text-gray-800">
      <div className="w-1/2">
        <h1 className="mb-5 text-2xl font-semibold leading-relaxed font-display">
          Lorem ipsum dolor sit amet.
        </h1>
        <article className="text-lg">
          <p className="mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quod
            dolorum veritatis, cumque fugiat cum tempora voluptatibus nam dolore
            doloremque architecto cupiditate fuga voluptas eius laudantium in
            voluptatem eos ab!
          </p>
          <p>
            Perspiciatis vitae, quod ex voluptatibus officiis perferendis
            delectus iste porro provident sunt alias quia deserunt natus est
            officia eius iusto veritatis cupiditate repudiandae fugit debitis
            illum harum at? Dignissimos, blanditiis?
          </p>
        </article>
      </div>
    </div>

    // Color
    <div className="flex items-center justify-center min-h-screen font-sans antialiased tracking-tighter text-gray-800">
      <div className="flex items-center gap-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          fill="currentColor"
          className="text-twitter"
          viewBox="0 0 16 16"
        >
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          fill="currentColor"
          className="text-facebook"
          viewBox="0 0 16 16"
        >
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          fill="currentColor"
          className="text-line"
          viewBox="0 0 16 16"
        >
          <path d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z" />
        </svg>
      </div>
    </div>
  );
}
