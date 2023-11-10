
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Importa Link para crear enlaces de navegación


function Pokemon() {
    const pokemonList = useSelector((state) => state.PokemonName);

    return (
        <div >
            <Link to="/home"> {/* Enlace a la página de inicio */}
                <button >Back to Home</button>
            </Link>
            {pokemonList &&
                pokemonList.map((pokemon) => (
                    <div key={pokemon.id}>
                        <img  src={pokemon.image} alt={pokemon.name} />
                        <p >{pokemon.name}</p>
                    </div>
                ))}
        </div>
    );
}

export default Pokemon;
