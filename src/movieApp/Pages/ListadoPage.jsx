import { Listado } from "../components/Listado";

export const ListadoPage = ({ addOrRemoveFavs }) => {
  return (
    <>
      <Listado addOrRemoveFavs={addOrRemoveFavs} />
    </>
  );
};
