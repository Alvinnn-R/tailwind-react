import { Helmet } from "react-helmet";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import ArticleBody from "../../components/ArticleBody";

export default function Single() {
  return (
    <div>
      <head>
        <Helmet>
          <title>The Best Article | ARS Vision Media</title>
        </Helmet>
      </head>
      <Hero>
        <Hero.Body>
          <Hero.Title>The Best Article</Hero.Title>
          <p className="mt-4 mb-6 text-base font-light leading-relaxed md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            quis dolorum veritatis nulla.
          </p>
        </Hero.Body>
      </Hero>

      <div className="container">
        <div className="max-w-5xl mx-auto">
          <ArticleBody />
        </div>
      </div>

      <Footer />
    </div>
  );
}
