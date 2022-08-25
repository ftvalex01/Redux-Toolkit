import { useEffect} from "react"
import { useDispatch,useSelector } from "react-redux"
import { pokemonApi } from "./api/pokemonApi"
import { pokemonSlice } from "./store/slices/pokemon/pokemonSlice"
import { getPokemons } from "./store/slices/pokemon/thunks"

export const PokemonApp = () => {

const {isLoading,pokemons = [],page} = useSelector(state=>state.pokemons)

const dispatch = useDispatch()

useEffect(() => {
  dispatch(getPokemons());
}, [])



  return (
    <>
        <h1>Pokemon App</h1>
        <hr/>
        <span>Loading:{isLoading ? 'True' : 'false'}</span> 
        <ul>
       {
          pokemons.map(pokemon=>(
            <li key={pokemon.name}>{pokemon.name}</li>
          ))
        } 
          
        </ul>
        <button 
        disabled={isLoading} 
        onClick={()=>dispatch(getPokemons(page))}
        >
          Next
        </button>
    </>
  )
}
