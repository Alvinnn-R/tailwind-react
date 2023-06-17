import { Helmet } from "react-helmet";
import Hero from "../components/Hero";

export default function Articles({ children }) {
  return (
    <>
      <Hero>
        <Helmet>
          <title>Our Article</title>
        </Helmet>
        <Hero.Body>
          <header className="py-4 lg:py-9 md:py-16 text-white">
            <Hero.Title>Our Article</Hero.Title>
            <p className="mt-4 mb-6 text-base font-light leading-relaxed md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae quis dolorum veritatis nulla, nemo consequuntur
              temporibus quisquam expedita libero est facere ipsum laboriosam
              eveniet itaque. Rem, dicta temporibus?
            </p>
          </header>
        </Hero.Body>
      </Hero>
      <div className="container">Articles</div>
    </>
  );
}
