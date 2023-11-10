import { useState}from "react";
import { useDispatch } from "react-redux";
import { PokemonByName, allPokemons} from "../../Redux/actions";
import { useNavigate } from "react-router-dom";
import style from './Search.module.css'

const Search=()=>{
  const dispatch= useDispatch();
  // Estado local para almacenar el valor de búsqueda
  const [searchValue, setSearchValue]=useState('')
  const navigate = useNavigate()

  // Manejar el cambio en el campo de búsqueda
  const HandleChange=(event)=>{
    setSearchValue(event.target.value);
  }
   // Realizar una búsqueda y despachar una acción para obtener Pokémon por nombre
  const HandleSearch=()=>{
    dispatch(PokemonByName(searchValue))
    setSearchValue('')
    navigate ("/pokemon")
  }
    
     // Restaurar la lista de todos los Pokémon
     
            dispatch(allPokemons())
           

    return(
        <div className= {style.searchBar}>
      <input 
            type="search" 
            onChange={HandleChange} 
            value={searchValue}  
            className= "searchInput" /> 
      <button onClick={HandleSearch} className= {style.searchButton}>Search</button>
      
    </div>
    )
}

export default Search
