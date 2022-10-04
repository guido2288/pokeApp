import { PokeData } from "./PokeData"

export const PokeCard = ({ pokemons }) => {

  return (
    <>
      {
        pokemons.map((pokemon) => {
          return (
            <PokeData key={pokemon.name} pokemon={pokemon} />
          )
        })
      }
    </>
  )
}
