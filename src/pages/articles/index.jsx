import { Helmet } from "react-helmet";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

export default function index({ children }) {
  const posts = [
    {
      title: "Lorem ipsum dolor sit amet.",
      created_at: "11 Juli 2023",
      author: "alvinramas",
      picture:
        "https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2FsbHBhcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Qui eos rerum distinctio numquam.",
      created_at: "11 Juli 2023",
      author: "alvinramas",
      picture:
        "https://images.unsplash.com/photo-1682685797140-c17807f8f217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Repellendus temporibus vel eum tempore!",
      created_at: "11 Juli 2023",
      author: "alvinramas",
      picture:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbHBhcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Vitae facere quisquam dolorem deleniti.",
      created_at: "11 Juli 2023",
      author: "alvinramas",
      picture:
        "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2FsbHBhcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Voluptatem optio consequuntur voluptas delectus?",
      created_at: "11 Juli 2023",
      author: "alvinramas",
      picture:
        "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2FsbHBhcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Ipsum laudantium id iste aliquam?",
      created_at: "11 Juli 2023",
      author: "alvinramas",
      picture:
        "https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <>
      <Hero>
        <Helmet>
          <title>Our Article | ARS Vision Media</title>
        </Helmet>
        <Hero.Body>
            <Hero.Title>Our Article</Hero.Title>
            <p className="mt-4 mb-6 text-base font-light leading-relaxed md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae quis dolorum veritatis nulla, nemo consequuntur
              temporibus quisquam expedita libero est facere ipsum laboriosam
              eveniet itaque. Rem, dicta temporibus?
            </p>
        </Hero.Body>
      </Hero>

      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-x-16 sm:gap-y-14">
          {posts.map((post, index) => (
            <div key={index}>
              <a href="/articles/single">
                <img
                  className="shadow hover:shadow-xl transition-shadow duration-300 rounded-xl mb-4 aspect-[4/2.30] w-full object-cover object-center"
                  src={post.picture}
                  alt={post.title}
                />
              </a>
              <a href="/articles/single">
                <h1 className="mb-2 sm:mb-4 font-semibold">{post.title}</h1>
              </a>
              <div className="flex items-center justify-between font-mono text-sm text-gray-500">
                <span>{post.author}</span>
                <span>{post.created_at}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
