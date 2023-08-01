import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import { FcLike } from "react-icons/fc";

export const Genero = ({ addOrRemoveFavs }) => {
  const params = useParams();
  const { genre } = params;
  const [genres, setGenres] = useState([]);

  const rating = (rate) => {
    if (rate > 8 && rate <= 10)
      return <p className="pl-2 text-green-600">{rate.toFixed(2)}/10</p>;
    if (rate < 8 && rate > 6)
      return <p className="pl-2 text-yellow-400">{rate.toFixed(2)}/10</p>;
    if (rate > 0 && rate < 6)
      return <p className="pl-2 text-red-600">{rate.toFixed(2)}/10</p>;
    if (rate === null)
      return (
        <p className="pl-2 text-emerald-600">No se encontraron resultados</p>
      );
  };

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc&with_genres=${genre}&api_key=2c277941abfe888e350418f7e556e833`;
    axios
      .get(endPoint)
      .then((res) => {
        setGenres(res.data.results);
      })
      .catch((error) => {
        Swal.fire("Error", "No se encotro la pelicula solicitada", "error");
        console.log(error);
        //navigate("/listado");
      });
  }, [genre]);

  return (
    <>
      <h1 className="font-bold text-4xl text-green-500">Peliculas</h1>
      <div className="grid mt-4 mb-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 lg:gap-3 justify-items-center md:justify-around	">
        {genres.map((movie) => (
          <div
            className="border border-none overflow-hidden relative w-44 h-64 lg:w-60 lg:h-96 rounded-md group shadow-xl mb-3"
            key={movie.id}
          >
            <img
              className="object-contain"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="img"
            />
            <button onClick={addOrRemoveFavs} className="absolute flex items-center justify-center w-8 h-8 top-2 right-2 bg-white rounded-full hover:bg-green-300">
              <FcLike size={22} />
              {/* <FcDislike size={22} /> */}
            </button>
            <p className="absolute flex items-center justify-center w-9 h-4 top-2 left-2 bg-green-400 saturate-200 rounded-full text-xs font-bold text-[#243351]">
              {movie.release_date.substring(0, 4)}
            </p>
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
                  {movie.overview.substring(0, 80)}...
                </p>
              </div>
              <div className="flex justify-between align-middle items-center">
                <p title="Valoraciones" className="p-2 mb-3 font-semibold">
                  {rating(movie.vote_average)}
                </p>
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
