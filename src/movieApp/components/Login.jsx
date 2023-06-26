import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email === "" || password === "") {
      Swal.fire("Error", "Los campos no pueden estar vacíos", "error");
      return;
    }
    if (email !== "" && !regexEmail.test(email)) {
      Swal.fire(
        "Error",
        "Debes escribir un correo eléctronico válido",
        "error"
      );
      return;
    }
    if (email !== "challenge@alkemy.org" || password !== "react") {
      Swal.fire("Error", "Credenciales inválidas", "error");
      return;
    }
    Swal.fire("Logueado", "Te estas redirigiendo al Home", "success");
    axios
      .post("http://challenge-react.alkemy.org/", { email, password })
      .then((res) => {
        const tokenAuth = res.data.token;
        sessionStorage.setItem("token", tokenAuth);
        navigate("/home");
      });
  };

  return (
    <div className="w-auto m-0 h-auto md:h-[550px] p-0 pb-8 gap-10 flex flex-col md:flex-row justify-center items-center">
      <div className="">
        <h1 className="text-4xl font-bold text-green-500">MovieApp.</h1>
        <p className="pt-2">Encontrá info de tus peliculas!</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full h-auto md:w-96 md:h-96 bg-[#2a3449] rounded-2xl p-0 m-0"
      >
        <div className="flex flex-col p-10 ml-auto w-full py-6 mt-0">
          <h2 className="text-green-500 text-2xl mb-1 font-medium title-font">
            Login
          </h2>
          <div className="relative mb-3">
            <label type="email" className="leading-7 text-sm text-gray-400">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label type="name" className="leading-7 text-sm text-gray-400">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-white mt-4 bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
            Button
          </button>
          <p className="text-xs text-green-500  text-opacity-90 mt-3">
            Introduzca de email: "challenge@alkemy.org"
          </p>
          <p className="text-xs text-green-500  text-opacity-90 mt-3">
            Introduzca de password: "react"
          </p>
        </div>
      </form>
    </div>
  );
};
