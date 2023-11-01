import {
    ALL_POKEMONS,
    ALL_TYPES,
    POKEMON_NAME,
    ORDER_ATTACK,
    ORDER_NAME,
    ORDER_ORIGIN,
    ORDER_TYPES,
    FAILURE,
}from '../Redux/actios-types';

const initialState={
    Pokemons: [],
    Types: [],
    PokemonName: [],
    OrderAttack: [],
    OrderName: [],
    OrderOrigin: [],
    OrderTypes: [],
    Failure: "",
 
};

const rootReducer=(state=initialState,action)=>{
    switch(action.type){
        case ALL_POKEMONS:
            return{
                ...state,
                Pokemons:action.payload
            };
        case ALL_TYPES:
            return{
                ...state,
                Types:action.payload,
            };
    }
}
export default rootReducer;