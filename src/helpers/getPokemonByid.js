

export const getPokemonByid = async (id) => {

  try {

    let url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const response = await fetch(url);
    const data = await response.json();

    return data;

  } catch (error) {
    console.log(error)
  }

}