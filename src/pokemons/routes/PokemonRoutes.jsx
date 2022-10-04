import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { DataPage } from "../pages/DataPage"
import { PokemonPage } from "../pages/PokemonPage"


export const PokemonRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="pokemon" element={<PokemonPage />} />
        <Route path="pokemon/:id" element={<DataPage />} />

        <Route path="/" element={<Navigate to="/pokemon" />} />
      </Routes>

    </>
  )
}
