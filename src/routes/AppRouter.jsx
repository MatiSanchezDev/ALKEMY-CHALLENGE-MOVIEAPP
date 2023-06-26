import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  LoginPage,
  ListadoPage,
  HomePage,
  DetallePage,
  BusquedaPage,
} from "../movieApp/Pages/";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { FavoritosPage } from "../movieApp/Pages/FavoritosPage";
import { GeneroPage } from "../movieApp/Pages/GeneroPage";
import Swal from "sweetalert2";

export const AppRouter = () => {
  const token = sessionStorage.getItem("token");
  const [favorites, setFavorites] = useState([]);

  const toastMixin = Swal.mixin({
    toast: true,
    icon: "success",
    title: "General Title",
    position: "top-right",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  useEffect(() => {
    const favMovies = localStorage.getItem("fav");

    if (favMovies !== null) {
      const favsArray = JSON.parse(favMovies);
      setFavorites(favsArray);
    }
  }, []);

  const addOrRemoveFavs = (e) => {
    const favMovies = localStorage.getItem("fav");

    let tempMoviesInFavs;

    if (favMovies === null) {
      tempMoviesInFavs = [];
    } else {
      tempMoviesInFavs = JSON.parse(favMovies);
    }

    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector("img").getAttribute("src");
    const title = parent.querySelector("h1").innerText;
    const overView = parent.querySelector("p").innerText;
    const movieData = {
      imgURL,
      title,
      overView,
      id: btn.dataset.movieId,
      rate: btn.dataset.movieRate,
    };

    let moviesIsInArray = tempMoviesInFavs.find((oneMovie) => {
      return oneMovie.id === movieData.id;
    });

    if (!moviesIsInArray) {
      tempMoviesInFavs.push(movieData);
      localStorage.setItem("fav", JSON.stringify(tempMoviesInFavs));
      setFavorites(tempMoviesInFavs);
      toastMixin.fire({
        title: "Agregado a favoritos",
      });
    } else {
      let moviesLeft = tempMoviesInFavs.filter((oneMovie) => {
        return oneMovie.id !== movieData.id;
      });
      localStorage.setItem("fav", JSON.stringify(moviesLeft));
      setFavorites(moviesLeft);
      toastMixin.fire({
        title: "Eliminado de favoritos",
        icon: "error",
      });
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {!token ? (
          <Route path="/*" element={<Navigate to={"/"} />} />
        ) : (
          <Route path="/*" element={<Navigate to={"/home"} />} />
        )}

        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/peliculas"
            element={<ListadoPage addOrRemoveFavs={addOrRemoveFavs} />}
          />
          <Route
            path="/favoritos"
            element={
              <FavoritosPage
                favorites={favorites}
                addOrRemoveFavs={addOrRemoveFavs}
              />
            }
          />
          <Route
            path="/detalle/:movieID"
            element={<DetallePage addOrRemoveFavs={addOrRemoveFavs} />}
          />
          <Route
            path="/genero/:genre"
            element={<GeneroPage addOrRemoveFavs={addOrRemoveFavs} />}
          />
          <Route
            path="/busqueda/:keyword"
            element={<BusquedaPage addOrRemoveFavs={addOrRemoveFavs} />}
          />
        </Route>
      </Routes>
    </>
  );
};
