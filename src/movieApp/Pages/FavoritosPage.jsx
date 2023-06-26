import { Favoritos } from "../components/Favoritos";

export const FavoritosPage = ({ addOrRemoveFavs, favorites }) => {
  return (
    <>
      <Favoritos favorites={favorites} addOrRemoveFavs={addOrRemoveFavs} />
    </>
  );
};
