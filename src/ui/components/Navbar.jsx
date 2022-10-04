import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context";
import { getPokemonByid } from "../../helpers/getPokemonByid";
import { useForm } from "../../hooks/useForms"
import logo from "../../images/pokebola.png"

import Swal from 'sweetalert2'

export const Navbar = () => {

  const navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem('user'));

  const { logout } = useContext(AuthContext)

  const { searchText, onInputChange } = useForm({
    searchText: ''
  });

  const onSearchSubmit = async (e) => {
    e.preventDefault();



    if (searchText.trim().length <= 1) return;

    const data = await getPokemonByid(searchText);

    if (!data) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se encontro ningún pokemon con ese nombre...',
      })
    }

    navigate(`pokemon/${searchText.toLowerCase().trim()}`);

  }

  const onLogout = () => {
    logout();
    Swal.fire('Adios! :)')
    navigate('/login', {
      replace: true
    })
  }

  return (
    <nav className="flex flex-col items-center space-y-3 p-3 sm:flex-row sm:space-y-0 sm:space-x-10 bg-slate-600 h-30 sm:justify-around">
      <div className="flex ml-3 items-center justify-around" >
        <img src={logo} className="w-8" />
        <h1 className="text-white ml-4 text-lg">PokeApp</h1>
        <h2 className=" text-green-600 ml-4 text-lg underline">{user?.name}</h2>
        <h2 className="text-red-700 ml-4 cursor-pointer" onClick={onLogout}>Salir  ❌</h2>
      </div>

      <div className="flex ">
        <form className=" bg-white rounded-md" onSubmit={onSearchSubmit}>
          <input
            type="text"
            placeholder="Buscar..."
            value={searchText}
            onChange={onInputChange}
            name="searchText"
            required pattern="^[a-zA-Z]{2,15}$"
            title="La búsqueda tiene que tener 2 o más caracteres y no puede tener números"
            className="border-none outline-none px-2" />
          <button type="Submit" className="bg-green-300 border-none outline-none tracking-wider p-2 hover:bg-green-500 rounded-r-md">Buscar</button>
        </form>
      </div>

    </nav>
  )
}
