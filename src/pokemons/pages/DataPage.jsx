import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getPokemonByid } from "../../helpers/getPokemonByid";


export const DataPage = () => {

  const [pokemon, setPokemon] = useState([]);

  const [loading, setloading] = useState(true);

  const { id } = useParams();

  const navigate = useNavigate()

  const onNavigateBack = () => {
    const actualPage = pokemon.id / 20
    console.log(Math.ceil(actualPage))
    sessionStorage.setItem('page', JSON.stringify(Math.ceil(actualPage) - 1))
    navigate("/");
  }


  const fetchPokemon = async (id) => {

    try {
      setloading(true)
      const data = await getPokemonByid(id);

      if (!data) {
        navigate('/')
      }

      setPokemon(data)
      setloading(false)

    } catch (error) {
      console.log(error)

    }

  }

  useEffect(() => {
    fetchPokemon(id)

  }, [])

  return (

    <>

      {
        loading
          ? <h3 className="bg-white flex flex-col justify-center max-h-screen items-center  w-screen text-2xl">Loading...</h3>

          : <div className="bg-slate-100 flex flex-col justify-start  items-center bg-auto md:min-h-screen">

            <div className="bg-white p-6 drop-shadow-md my-2 md:my-6">

              <div className="flex gap-2 py-2 justify-center">
                <h2 className="capitalize text-xl md:text-3xl">{pokemon.name}</h2>
                <p className="text-stone-500 text-xl md:text-3xl">#{pokemon.id}</p>
              </div>
              <hr />

              <div className="md:flex md:my-10">

                <img src={pokemon.sprites.other.dream_world.front_default} className="max-w-xs max-h-72 sm:my-2">
                </img>


                <div className="flex flex-col md:justify-center md:px-4 md:text-xl">


                  <div className="flex justify-center py-2">
                    {

                      pokemon.types.map((type, idx) => {

                        return (

                          <h4 key={idx} types={type.type.name} className={`types ${type.type.name}`}>{type.type.name}</h4>
                        )
                      })
                    }
                  </div>


                  <ul className="capitalize">
                    {
                      pokemon.stats.map((stat, idx) => {
                        return <li key={idx}>{stat.stat.name}: {stat.base_stat}</li>
                      })

                    }
                  </ul>

                  <button
                    className="bg-green-300 border-none outline-none tracking-wider my-1 hover:bg-green-500 rounded-md"
                    onClick={onNavigateBack}
                  >
                    Regresar
                  </button>

                </div>

              </div>


            </div>


          </div>
      }



    </>


  )
}
