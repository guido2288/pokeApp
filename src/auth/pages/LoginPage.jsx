import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForms";
import logo from "../../images/pokebola.png"
import { AuthContext } from "../context";

import Swal from 'sweetalert2'

export const LoginPage = () => {

  const { login } = useContext(AuthContext)

  const navigate = useNavigate();

  const { userName, onInputChange } = useForm({
    userName: ''
  });

  const onLogin = (e) => {

    e.preventDefault();

    if (userName.trim().length <= 1) return;

    login(userName);

    Swal.fire(
      `Bienvenido ${userName}`,
      'Gracias por pasar por pasar por mi app!',
      'success'
    )

    navigate('/', {
      replace: true
    });
  }

  return (
    <div className='flex flex-col justify-center min-h-screen items-center  w-screen bg-auto bg-slate-100'>
      <div className="w-80 h-64 bg-slate-500 text-white place-content-center relative px-8 py-8 drop-shadow-2xl md:w-[500px] md:h-[400px]">
        <img src={logo} className="w-12 absolute -top-6 left-[8.5rem] md:left-[14rem]" />
        <h2 className="text-center text-2xl my-2 md:text-4xl md:my-4">Login Form</h2>
        <p className="mb-2 font-bold md:text-xl">Username: </p>
        <form onSubmit={onLogin}>
          <input
            type="text"
            name="userName"
            placeholder="Enter your name"
            className="my-2 h-9 bg-transparent border-b-2 border-white md:w-full md:my-4"
            value={userName}
            onChange={onInputChange}
            required pattern="^[a-zA-Z]{3,15}$"
            title="El username tiene que tener más de 2 caracteres"
          />
          <button type="submit" className="my-5 w-full bg-green-500 hover:bg-green-800 py-3 md:text-xl md:my-20" >Login</button>
        </form>

      </div>


    </div>
  )
}
