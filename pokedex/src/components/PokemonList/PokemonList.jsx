import { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import axios from 'axios';
import './PokemonList.css';
function PokemonList(){
    // const  [x ,setX] = useState(0);
    // const [y , setY] = useState(0);

    const [pokemonList , setpokemonList] = useState([]);
    const [isLoading , setIsLoading] = useState(true);

    const POKEDEX_URL = 'https://pokeapi.co/api/v2/pokemon';


   async function downloadpokemons() {
        const response = await axios.get( POKEDEX_URL); //THE DOWNLOAD  LIST OF 20 POKEMON
        const pokemonResults =  response.data.results; //we get the array of pokemon
        const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
        const pokemonData = await axios.all(pokemonResultPromise);
        console.log(pokemonData);


        const res = pokemonData.map((pokeData) =>{
          const  pokemon = pokeData.data;
         return {
          id:pokemon.id,
          name: pokemon.name, 
          image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
          type: pokemon.types
        }
      });

      console.log(res);
      setpokemonList(res);
      setIsLoading(false);
    };
  


     
  

    useEffect(() =>{
        downloadpokemons();
    },[] );

  

    return (
       
       <div className="pokemon-list-wrapper">
        <div> pokemon list</div>
         {(isLoading) ?  'Loading ....' :  pokemonList.map((p) => <Pokemon name ={p.name} image ={p.image} key ={p.id} />)} 
         </div>

    )


    }
    export default PokemonList;