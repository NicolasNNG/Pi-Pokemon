const { Router } = require('express');
// Importar todos los routers;

const PokemonsHandler = require('../handlers/getPokemons');
const getPokemonbyIdHandler = require('../handlers/getId');
const getPokemonByNameHandler = require('../handlers/getName');
const postPokemon = require('../handlers/postPokemon');
const getTypeHandler = require('../handlers/getTypes');
const imageHandler = require('../handlers/imgPokemon')


// Configurar los routers

const mainRouter = Router();

mainRouter.get('/name', getPokemonByNameHandler)//http://localhost:3001/pokemons?name=bulbasaur
mainRouter.get('/pokemons/:idPokemon', getPokemonbyIdHandler);//http://localhost:3001/pokemons/1
mainRouter.get('/pokemons', PokemonsHandler); //http://localhost:3001/pokemons
mainRouter.post('/pokemons', postPokemon);
mainRouter.get('/types', getTypeHandler);//http://localhost:3001/types
mainRouter.get('/images', imageHandler);



module.exports = mainRouter;
