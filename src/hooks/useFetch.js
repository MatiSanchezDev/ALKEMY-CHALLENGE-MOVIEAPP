import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const useFetch = () => {
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const endPoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=2c277941abfe888e350418f7e556e833&include_video=false&language=es-ES&page=1&sort_by=popularity.desc";

    axios
      .get(endPoint)
      .then((res) => {
        setMovieList(res.data.results);
      })
      .catch((error) => {
        Swal.fire(
          "Error",
          "Hubo un error en la api y te estamos redigiendo al login",
          "error"
        );
        clg({ error });
        navigate("/home");
      });
  }, [setMovieList]);

  return {
    movieList,
  };
};
