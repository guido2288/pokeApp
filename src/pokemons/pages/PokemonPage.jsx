import { useEffect, useState } from "react";
import { getPokemonData } from "../../helpers/getPokemonData";
import { getPokemons } from "../../helpers/getPokemons";
import { Pagination } from "../components/Pagination";
import { PokeCard } from "../components/PokeCard";

export const PokemonPage = () => {

  let actualPage = JSON.parse(sessionStorage.getItem('page'));

  const [pokemons, setPokemons] = useState([]);

  const [page, setPage] = useState(actualPage);

  const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(true);

  const fetchPokemon = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(20, 20 * page);

      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })

      const results = await Promise.all(promises);
      setPokemons(results)
      setLoading(false)
      setTotal(Math.ceil(data.count / 20))
    } catch (error) {
      console.log(error)
    }
  }

  const lastPage = () => {
    if (page <= 0) {
      sessionStorage.setItem('page', JSON.stringify(0))
      return setPage(0)
    }
    const nextPage = page - 1
    sessionStorage.setItem('page', JSON.stringify(nextPage))
    setPage(nextPage)
  }

  const nextPage = () => {
    const nextPage = page + 1
    sessionStorage.setItem('page', JSON.stringify(nextPage))
    setPage(nextPage)
  }

  useEffect(() => {
    fetchPokemon()
  }, [page])



  return (
    <>
      <Pagination page={page + 1} totalPages={total} onLeftClick={lastPage} onRightClick={nextPage} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-slate-100">

        {
          loading
            ? <h3 className="bg-white flex flex-col justify-center min-h-screen items-center  w-screen text-2xl">Loading...</h3>

            : <PokeCard pokemons={pokemons} />

        }


      </div>
    </>
  )
}
