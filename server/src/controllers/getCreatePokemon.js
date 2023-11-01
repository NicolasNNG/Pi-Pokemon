const { Pokemon ,Types} =require('../db');

//Funcion para crear un nuevo Pokémon en la BD 
const postPokemon=async(
    name,
    hp,
    attack,
    defense,
    speed=null,
    height=null,
    weight=null,
    image,
    createdInBd,
    types,
    )=>{
    //Buscar en la BD si no existe el pokemon
    const [pokemon,created]=await Pokemon .findOrCreate({
        where:{name},//Busca un pokemon con el mismo nombre
        defaults:{
            name,
            hp,
            attack,
            defense,
            speed,  
            height,
            weight,
            image,
            createdInBd,
            
        },//si no se encuentra , cre aun nuevo con los datos proporcionados
    });
    //Manejo de errores si no se creo un pokémon
    if(!created){
        throw new Error('Este Pokémon ya existe en la Base de Datos');
    }
    //Buscar los tipos en la BD que correspondan a los type proporcionados
    const typesBd=await Types.findAll({
        where:{
            name:types
        }
    })
    //Asociar los tipos encontrados al pokémon creado 
    pokemon.addTypes(typesBd);
    return pokemon
}
module.exports={postPokemon}