import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonDetails() {
  const { id } = useParams();
  const [pokeemon , setPokeemon] = useState({});
  console.log(id);

  async function downloadPokemon(){
   const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
   setPokeemon({
   name: response.data.name,
   image: response.data.sprites.other.dream_world.front_default,
   weight : response.data.weight,
   height : response.data.height,
   types : response.data.types.map((t) => t.type.name)

  })

 
}
  useEffect(() =>{
    downloadPokemon();
  },[]);


  return(
    <div className="pokemon-details-wrapper">
        <div className="pokemon-details-name">name : {pokeemon.name}</div>
        <img className="pokemon-details-image"  src={pokeemon.image}  />
         <div>Height: {pokeemon.height}</div>
        <div>Weight: {pokeemon.weight}</div>


        <div className="pokemon-details-types">
        {pokeemon.types && pokeemon.types.map((t) => <div key={t}>{t}</div>)}
        </div>
    </div>
  )



  }
export default PokemonDetails;
