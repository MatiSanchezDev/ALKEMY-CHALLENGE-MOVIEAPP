import { useState } from "react"
import { Link } from "react-router-dom"

export const HeaderPeliculas = () => {
    const [dropDownOpen, setDropDownOpen] = useState(false)
  return (
    <>
<div className="flex justify-center items-center h-2">
    <button onClick={()=> setDropDownOpen(!dropDownOpen)} className="pr-2">
    CATEGORIAS
    </button>
<div className={dropDownOpen? "relative my-32" : ""}>
  <button onClick={() => setDropDownOpen(!dropDownOpen)} className="relative z-10 block rounded-md bg-[#243351] p-2 focus:outline-none">
    <svg className="h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </button>

  <div onClick={() => setDropDownOpen(!dropDownOpen)} className={dropDownOpen? "fixed inset-0 w-full z-60": ""}></div>

  <div className={dropDownOpen ? "absolute right-0 mt-2 py-2 w-48 bg-[#243351] rounded-md shadow-xl z-10" : "hidden"}>
    <Link to={"/peliculas"} onClick={() => setDropDownOpen(!dropDownOpen)} className="block px-4 py-2 text-sm capitalize font-bold text-green-400 hover:bg-blue-500 hover:text-white">
      Estrenos
    </Link>
    <Link to={"genero/28"} onClick={() => setDropDownOpen(!dropDownOpen)} className="block px-4 py-2 text-sm capitalize font-bold text-green-400 hover:bg-blue-500 hover:text-white">
      Acción
    </Link>
    <Link to={"genero/12"} onClick={() => setDropDownOpen(!dropDownOpen)} className="block px-4 py-2 text-sm capitalize font-bold text-green-400 hover:bg-blue-500 hover:text-white">
    Aventura
    </Link>
    <Link to={"genero/16"} onClick={() => setDropDownOpen(!dropDownOpen)} className="block px-4 py-2 text-sm capitalize font-bold text-green-400 hover:bg-blue-500 hover:text-white">
    Animación
    </Link>
    <Link to={"genero/35"} onClick={() => setDropDownOpen(!dropDownOpen)} className="block px-4 py-2 text-sm capitalize font-bold text-green-400 hover:bg-blue-500 hover:text-white">
      Comedia
    </Link>
    <Link to={"genero/80"} onClick={() => setDropDownOpen(!dropDownOpen)} className="block px-4 py-2 text-sm capitalize font-bold text-green-400 hover:bg-blue-500 hover:text-white">
      Crimen
    </Link>
    <Link to={"genero/99"} onClick={() => setDropDownOpen(!dropDownOpen)} className="block px-4 py-2 text-sm capitalize font-bold text-green-400 hover:bg-blue-500 hover:text-white">
      Documental
    </Link>
    <Link to={"genero/18"} onClick={() => setDropDownOpen(!dropDownOpen)} className="block px-4 py-2 text-sm capitalize font-bold text-green-400 hover:bg-blue-500 hover:text-white">
      Drama
    </Link>
    <Link to={"genero/14"} onClick={() => setDropDownOpen(!dropDownOpen)} className="block px-4 py-2 text-sm capitalize font-bold text-green-400 hover:bg-blue-500 hover:text-white">
      Fantasía
    </Link>
    <Link to={"genero/27"} onClick={() => setDropDownOpen(!dropDownOpen)} className="block px-4 py-2 text-sm capitalize font-bold text-green-400 hover:bg-blue-500 hover:text-white">
      Terror
    </Link>
  </div>
</div>
</div>
    </>
  )
}