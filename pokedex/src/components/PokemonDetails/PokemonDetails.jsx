import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PokemonDetails.css'

function PokemonDetails() {
  const { id } = useParams();
  const [pokeemon , setPokeemon] = useState({});
  // console.log(id);


  async function downloadPokemon(){
   const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
   console.log(response);
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
         <img className="pokemon-details-image"  src={pokeemon.image}  />
        <div className="pokemon-details-name">name :<span>{pokeemon.name}</span> </div>
     
         <div className="pokemon-details-name">Height: {pokeemon.height}</div>
        <div className="pokemon-details-name">Weight:   {pokeemon.weight}</div>


        <div className="pokemon-details-types">
        {pokeemon.types && pokeemon.types.map((t) => <div key={t}>{t}</div>)}
        </div>
    </div>
  )



  }
export default PokemonDetails;
