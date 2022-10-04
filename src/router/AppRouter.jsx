import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"

import { PokemonRoutes } from "../pokemons/routes/PokemonRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"



export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route path="/login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />


        <Route path="/*" element={
          <PrivateRoute>
            <PokemonRoutes />
          </PrivateRoute>
        } />

        {/* <Route path="login" element={<LoginPage />} /> */}
        {/* <Route path="/*" element={<PokemonRoutes />} /> */}


      </Routes>
    </>
  )
}
