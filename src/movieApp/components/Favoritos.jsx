import { FcDislike, FcLike } from "react-icons/fc";
import { ImStarHalf } from "react-icons/im";
import { Link } from "react-router-dom";

export const Favoritos = ({ addOrRemoveFavs, favorites }) => {
  console.log(favorites);
  const rating = (rate) => {
    if (rate > 8 && rate <= 10)
      return (
        <p className="pl-2 text-green-600 flex items-center gap-1">
          {rate}/10 <ImStarHalf />
        </p>
      );
    if (rate < 8 && rate > 6)
      return (
        <p className="pl-2 flex items-center gap-1 text-yellow-400">
          {rate}/10 <ImStarHalf />
        </p>
      );
    if (rate > 0 && rate < 6)
      return (
        <p className="pl-2 text-red-600 flex items-center gap-1">
          {rate}/10 <ImStarHalf />
        </p>
      );
    if (rate === null)
      return (
        <p className="pl-2 text-emerald-600">No se encontraron resultados</p>
      );
  };

  return (
    <>
      <h1 className="text-4xl font-semibold text-green-500">
        Lista de Favoritos:
      </h1>
      {!favorites.length > 0 && (
        <>
          <div className="h-96">No hay favoritos</div>
        </>
      )}
      <div className="grid mt-4 mb-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 lg:gap-3 justify-items-center md:justify-around	">
        {favorites.map((movie) => (
          <div
            className="border border-none overflow-hidden relative w-44 h-64 lg:w-60 lg:h-96 rounded-md group shadow-xl mb-3"
            key={movie.id}
          >
            <img
              className="object-contain"
              src={`https://image.tmdb.org/t/p/w500${movie.imgURL}`}
              alt="img"
            />
            <button
              onClick={addOrRemoveFavs}
              data-movie-id={movie.id}
              data-movie-rate={movie.vote_average}
              className="absolute flex items-center justify-center w-8 h-8 top-2 right-2 bg-white rounded-full hover:bg-green-300"
            >
              {/* <FcLike size={22} /> */}
              <FcDislike size={22} />
            </button>
            <div className="absolute bottom-[-60%] lg:bottom-[-38%] w-full bg-[#243351] rounded-t-xl pl-1 group-hover:bottom-0 ease-out duration-200">
              <h1
                title="Titulo"
                className="m-1 w-56 md:text-md lg:text-xl font-bold pt-2 truncate ..."
              >
                {movie.title}
              </h1>
              <div className="w">
                <p
                  title="Descripcion"
                  className="text-sm lg:text-base pt-2 pb-2 m-1 w-auto h-24 font-light"
                >
                  {movie.overView.substring(0, 80)}...
                </p>
              </div>
              <div className="flex justify-between align-middle items-center">
                <div
                  title="Valoraciones"
                  className="p-2 mb-3 font-semibold flex items-center"
                >
                  {rating(movie.rate)}
                </div>
                <Link
                  to={`/detalle/${movie.id}`}
                  className="lg:bg-green-500 text-white text-sm font-semibold lg:p-2 mb-3 mr-4 lg:border rounded-xl hover:bg-green-700"
                >
                  Ver mas
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
