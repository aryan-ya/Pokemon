import { useEffect, useState } from "react";
import axios from 'axios';
import './PokemonList.css';
function PokemonList(){
    const  [x ,setX] = useState(0);
    const [y , setY] = useState(0);


   async function downloadpokemons() {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        console.log(response);
    };

    useEffect(() =>{
        downloadpokemons();
    }, [])



    return (
        <>
       <div className="pokemon-list-wrapper">
         pokemon list
       </div>
        
        
        </>
    )
}



export default PokemonList;