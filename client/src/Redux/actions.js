import axios from 'axios'
import * as actionsTypes from './actions_types'

export const allPokemons=()=>{
    return async function(dispatch){
        try{
            const response=await axios.get(`http://localhost:3001/pokemon`)
            dispatch({
                type:actionsTypes.ALL_POKEMON,
                payload:response.data
            })
        }catch(error){
            console.log(error.message);
        }
    };
};


export const allTypes=()=>{
    return async function(dispatch){
        const response=await axios.get('http://localhost:3001/type')
        dispatch({
            type:actionsTypes.ALL_TYPES,
            payload:response.data
        })
    }
}
export const PokemonByName=(name)=>{
    return async function (dispatch){
        try{
            const response=await axios.get(`http://localhost:3001/pokemon?name=${name}`)
            dispatch({
                type:actionsTypes.POKEMON_NAME,
                payload:response.data
            })

        }catch(error){
            dispatch({
                type:actionsTypes.FAILURE,
                payload:`NO POKEMON WITCH NAME ${name}`
            })
        }
    }
}
export const FailureHandler=(Err)=>{
    return {
        type:actionsTypes.FAILURE,
        payload:Err
    }
}
export const orderName=(order)=>{
    return {
        type:actionsTypes.ORDER_NAME,
        payload:order
    }
}
export const orderAttack=(order)=>{
    return {
        type:actionsTypes.ORDER_ATTACK,
        payload:order
    }
}
export const orderTypes=(order)=>{
    return {
        type:actionsTypes.ORDER_TYPES,
        payload:order
    }
}
export const orderOrigin=(order)=>{
    return {
        type:actionsTypes.ORDER_ORIGIN,
        payload:order
    }
}