import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { ImStarHalf } from "react-icons/im";

export const Detalle = ({ addOrRemoveFavs }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { movieID } = params;

  const [movie, setMovie] = useState(null);

  const rating = (rate) => {
    if (rate > 8 && rate <= 10)
      return (
        <p className="pl-2 text-green-600 flex items-center gap-1">
          {rate.toFixed(2)}/10 <ImStarHalf />
        </p>
      );
    if (rate < 8 && rate > 6)
      return (
        <p className="pl-2 text-yellow-400 flex items-center gap-1">
          {rate.toFixed(2)}/10 <ImStarHalf />
        </p>
      );
    if (rate > 0 && rate < 6)
      return (
        <p className="pl-2 text-red-600 flex items-center gap-1">
          {rate.toFixed(2)}/10 <ImStarHalf />
        </p>
      );
    if (rate === null)
      return (
        <p className="pl-2 text-emerald-600">No se encontraron resultados</p>
      );
  };

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=2c277941abfe888e350418f7e556e833&language=es-ES`;

    axios
      .get(endPoint)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((error) => {
        Swal.fire("Error", "No se encotro la pelicula solicitada", "error");
        navigate("/listado");
      });
  }, [movieID]);

  return (
    <>
      {movie && (
        <>
          <h1 className="text-2xl md:text-4xl font-bold text-green-500">
            Titulo: {movie.title}
          </h1>
          <div className="flex flex-col justify-center items-center lg:items-start lg:flex-row pt-4 mb-6">
            <div className="flex-0 lg:w-[420px]">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="img"
              />
            </div>
            <div className="flex-1 mt-5 lg:ml-4 lg:mt-0">
              <h3 className="text-xl lg:2xl font-semibold">
                Fecha de estreno: {movie.release_date}
              </h3>
              <h3 className="text-2xl pt-3 font-bold">Reseña:</h3>
              <p className="pt-3">{movie.overview}</p>
              <h3 className="flex text-2xl pt-3 font-semibold">
                Rating: {rating(movie.vote_average)}
              </h3>
              <h3 className="text-2xl pt-3 font-semibold">Géneros:</h3>
              <ul className="pl-6 pt-2 marker:text-green-500 list-disc">
                {movie.genres.map((oneGenre) => (
                  <li key={oneGenre.id}>{oneGenre.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};
