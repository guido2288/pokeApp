import { Link } from "react-router-dom"

export const PokeData = ({ pokemon }) => {

  return (
    <>
      <Link to={`/pokemon/${pokemon.name}`}>
        <div className="flex justify-center bg-white drop-shadow-md m-6 hover:scale-105 hover:cursor-pointer">
          <div>
            <img src={pokemon.sprites.front_default} />
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex ">
              <h3 className={`capitalize mx-2`}>{pokemon.name}</h3>
              <p className="text-stone-500"># {pokemon.id}</p>
            </div>
            <div className="flex">
              {

                pokemon.types.map((type, idx) => {

                  return (

                    <h4 key={idx} types={type.type.name} className={`types ${type.type.name}`}>{type.type.name}</h4>
                  )
                })
              }



            </div>

          </div>

        </div>

      </Link>
    </>
  )
}
