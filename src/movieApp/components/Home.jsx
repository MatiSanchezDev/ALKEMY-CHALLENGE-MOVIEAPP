import { SiThemoviedatabase } from "react-icons/si";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <section>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="flex flex-col w-full mb-12 text-center">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mx-auto mb-5 text-blue-600 rounded-full bg-gray-50">
              <SiThemoviedatabase
                className="w-16 h-16 icon icon-tabler icon-tabler-aperture text-green-500 hover:saturate-150"
                strokeWidth="0.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="20" cy="20" r="9"></circle>
                <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                <line
                  x1="3.6"
                  y1="15"
                  x2="14.15"
                  y2="15"
                  transform="rotate(72 12 12)"
                ></line>
                <line
                  x1="3.6"
                  y1="15"
                  x2="14.15"
                  y2="15"
                  transform="rotate(144 12 12)"
                ></line>
                <line
                  x1="3.6"
                  y1="15"
                  x2="14.15"
                  y2="15"
                  transform="rotate(216 12 12)"
                ></line>
                <line
                  x1="3.6"
                  y1="15"
                  x2="14.15"
                  y2="15"
                  transform="rotate(288 12 12)"
                ></line>
              </SiThemoviedatabase>
            </div>
            <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-green-500 md:text-5xl lg:text-6xl lg:max-w-7xl hover:saturate-150">
              Buscá tu pelicula favorita <br className="hidden lg:block" />y
              mirá su valoración!
            </h1>

            <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-center text-gray-500">
              Esta página fue creada a modo de ejemplo para el portafolio de
              MattDev y para el Challenge de la empresa Alkemy
            </p>

            <Link
              to={"/peliculas"}
              className="mx-auto mt-8 text-md font-semibold text-green-500 hover:text-green-700"
              title="read more"
            >
              {" "}
              Mirá las peliculas más populares »{" "}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
