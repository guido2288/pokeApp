import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

const initialState = {
  logged: false,
}

const init = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));

  return {
    logged: !!user,
    user
  }
}


export const AuthProvider = ({ children }) => {

  const [state, dispatch] = useReducer(authReducer, initialState, init);



  const login = (name = '') => {

    const user = { name }

    const action = {
      type: types.login,
      payload: user
    }

    sessionStorage.setItem('user', JSON.stringify(user))

    sessionStorage.setItem('page', JSON.stringify(0))

    dispatch(action);
  }

  const logout = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('page');
    const action = { type: types.logout }
    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{
      state,
      login: login,
      logout: logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}
