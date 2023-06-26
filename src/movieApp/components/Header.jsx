import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaBars } from "react-icons/fa";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";

export const Header = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSearch = () => {
    setSearch(!search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.currentTarget.search.value.trim().toLowerCase();

    if (search.length <= 1) {
      Swal.fire(
        "Atención",
        "Debe introducir mas de una letra para la busqueda",
        "info"
      );
    } else if (search.length > 1) {
      navigate(`/busqueda/${search}`);
    }
  };

  const handleLogout = () => {
    Swal.fire("Logout Success", "Te estamos redirigiendo al login", "success");
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <>
      {/* Navbar */}
      <header className="m-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <button onClick={handleNav}>
              <FaBars className="text-lg md:hidden" />
            </button>
            <ul className="hidden md:flex md:items-center uppercase gap-5">
              <li>
                <Link to={"/home"}>
                  <h1 className="font-bold text-2xl text-green-500 hover:text-white">
                    MovieApp.
                  </h1>
                </Link>
              </li>
              <li className=" hover:border-b-2 border-green-500 ease-in duration-80">
                <Link to={"/home"}>Home</Link>
              </li>
              <li className=" hover:border-b-2 border-green-500 ease-in duration-80">
                <Link to={"/peliculas"}>Peliculas</Link>
              </li>
              <li className=" hover:border-b-2 border-green-500 ease-in duration-80">
                <Link to={"/favoritos"}>Favoritos</Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-5">
            <button
              onClick={handleSearch}
              className="pointer hover:text-green-500"
            >
              <BsFillSearchHeartFill className="text-lg xl:text-2xl" />
            </button>
            <button
              className="w-20 h-10 border rounded-lg border-gray-600 focus:border-green-900 hover:bg-green-500"
              onClick={handleLogout}
            >
              <Link to={"/login"} className="text-md">
                Logout
              </Link>
            </button>
          </div>
          {/* Modal */}
          <div
            className={
              !nav
                ? "fixed top-0 left-[-100%] h-screen ease-in-out duration-500"
                : "fixed z-10 top-0 left-0 w-[60%] bg-[#1A202C] h-screen border-r border-green-900 ease-in-out duration-500"
            }
          >
            <div className="flex justify-end items-center mt-2 mr-2">
              <button
                onClick={handleNav}
                className="focus:ring-1 ring-green-600"
              >
                <IoCloseSharp size={27} className=" text-green-600 " />
              </button>
            </div>
            <ul className="pt-4 uppercase flex flex-col items-center gap-5 font-semibold">
              <li>
                <Link to={"/home"}>
                  <h1 className="font-bold text-2xl text-green-500">
                    MovieApp.
                  </h1>
                </Link>
              </li>
              <li className="border-b border-b-green-600 w-48 text-center p-2">
                <Link className="hover:text-green-500" to={"/home"}>
                  Home
                </Link>
              </li>
              <li className="border-b border-b-green-600 w-48 text-center p-2">
                <Link className="hover:text-green-500" to={"/peliculas"}>
                  Peliculas
                </Link>
              </li>
              <li className="border-b border-b-green-600 w-48 text-center p-2">
                <Link className="hover:text-green-500" to={"/favoritos"}>
                  Favoritos
                </Link>
              </li>
              <li className="w-full pl-4 pr-4">
                <button
                  className="w-full h-10 border rounded-lg bg-green-500 focus:border-green-900 hover:border-gray-600 hover:bg-[#111b2e]"
                  onClick={handleLogout}
                >
                  <Link to={"/login"} className="text-md">
                    Logout
                  </Link>
                </button>
              </li>
            </ul>
          </div>
          {/* Modal Search */}
          <div
            className={
              !search
                ? "fixed w-full top-[-100%] left-0 flex items-center justify-center ease-in-out duration-500"
                : "fixed w-full z-10 top-0 left-0 h-[100px] bg-[#2a3449] p-4 flex items-center justify-center gap-4 ease-in-out duration-500"
            }
          >
            <form onSubmit={handleSubmit} className="w-[600px] p-3x">
              <label className="relative flex gap-2 w-full">
                <input
                  className="placeholder:italic text-green-800 placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-green-500 focus:ring-green-600 focus:ring-1 sm:text-sm"
                  placeholder="Search Movie..."
                  type="text"
                  name="search"
                />
                <button
                  type="submit"
                  className="w-24 border rounded-lg border-gray-600 focus:border-green-500 focus:ring-green-500 hover:bg-green-500"
                >
                  Search
                </button>
              </label>
            </form>
            <button
              onClick={handleSearch}
              className="focus:ring-1 ring-green-600"
            >
              <IoCloseSharp size={27} className=" text-green-600 " />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};
