const {Router}=require( 'express');
const {getAllPokemonHandler,getByIdHandlers,postCreatePokemonHandlers}=require('../handlers/pokemonHandlers');

const pokemonRouter=Router();

// http://localhost:3001/pokemon?name=bulbasaur
pokemonRouter.get('/',getAllPokemonHandler);
pokemonRouter.post('/create',postCreatePokemonHandlers)
pokemonRouter.get('/:id',getByIdHandlers)
module.exports=pokemonRouter;