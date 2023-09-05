import { useEffect, useState } from "react";
import axios from 'axios';
import './PokemonList.css';
function PokemonList(){
    // const  [x ,setX] = useState(0);
    // const [y , setY] = useState(0);

    const [pokemonList ,setpokemonList] = useState([]);
    const [isLoading ,setIsLoading] = useState(true);


   async function downloadpokemons() {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const pokemonResults =  response.data.results;
        const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
        const pokemonData = await axios.all(pokemonResultPromise)
        console.log(pokemonData.data);
         setIsLoading(false);

       setPokemonList(pokemonData.map(pokemonData)=>{
         const pokemon = pokeData.data;

       })
    };

    useEffect(() =>{
        downloadpokemons();
    }, )



    return (
        <>
       <div className="pokemon-list-wrapper">
         pokemon list
         {(isLoading) ?  'Loading ....' : 'Data downloaded'}
       </div>
        
        
        </>
    )
}



export default PokemonList;