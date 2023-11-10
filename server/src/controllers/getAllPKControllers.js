// const {Pokemon,Types}=require('../db');
// const axios=require('axios');

// //Función para obtener datos de PK desde la API 

// const getPokemonsApi=async()=>{
//     try{
//         const api=await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=300')
//         //Obtener la lista de resultados de  la API 
//         const pokemonApi=await api.data.results;

//         //Mapear cada resultado para obtner detalles especificos
//         const dataPokemon=pokemonApi.map(async(pokemon)=>{
//             const info =await axios.get(pokemon.url);
//             const pk=info.data;
//             return{
//                 id:pk.id,
//                 name:pk.name,
//                 types:pk.types.map((e)=>e.type.name),
//                 image:pk.sprites.other.home.front_default,
//                 hp:pk.stats[0].base_stat,
//                 attack:pk.stats[2].base_stat,
//                 defense:pk.stats[5].base_stat,
//                 height:pk.height,
//                 weight:pk.weight,
//             };
//         }) ;
//         // Espera a que todas las solicitudes de detalles de Pokémon se completen
//         const getAllPokemon=await Promise.all(dataPokemon);
//         return getAllPokemon;
//     }catch(error){
//         throw new Error(error.message);
//     }
// };
//     const getPokemonDb=async()=>{
//         try{
//             const allPokemonDb=await Pokemon.findAll({
//                 //Buscar en la tabla los modelos ,incluyen los tipos
//                 include:{
//                     model:Types,
//                     attributes:['name'],//Obtener solo el name del tipo
//                 },
//             });
            
//             //Mapear los datos de la DB a un formato deseado
//             const mapPokemon=allPokemonDb.map((e)=>{
//                 // Verifica si e.Types es una matriz válida antes de usar map
//                 const typeArray=e.Types ?e.Types.map((type)=>type.name):[];

//                 return {
//                     id:e.id,
//                     name:e.name,
//                     image:e.image,
//                     types:typeArray,
//                     hp:e.hp,
//                     attack:e.attack,
//                     defense:e.defense,
//                     speed:e.speed,
//                     height:e.height,
//                     weight:e.weight,
//                     createdInDb:e.createdInDb,
//                 };
//             });
//             return mapPokemon;

//         }catch(error){
//             throw new Error(error.message);
//         }
//     };
// //Funcion para obtener todos los pokemon (API, BD)
// const getAllPokemonController=async(name)=>{
//     const pokemonDb=await getPokemonDb();
//     const pokemonApi=await getPokemonsApi ();

//     //Combinar los resultados de la API Y BD 
//     const allPokemon=pokemonDb.concat(pokemonApi);
//     if(name){
//         // Filtra los Pokémon por nombre si se proporciona un nombre
//         const pokemonName=allPokemon.filter((e)=>e.name.toLowerCase()===name.toLowerCase());

//         if(pokemonName.length>0){
//             return pokemonName;
//         }else{
//             throw new Error(`No se encontró ningún Pokémon llamado ${name}`);

//         }
    
//     }
//     return allPokemon;
// }
// module.exports={getAllPokemonController}



// const { Pokemon, Types } = require('../db');
// const axios = require('axios');

// // Función para obtener datos de PK desde la API
// const getPokemonsApi = async () => {
//     try {
//         const api = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=300');
//         const pokemonApi = await api.data.results;

//         const dataPokemon = pokemonApi.map(async (pokemon) => {
//             const info = await axios.get(pokemon.url);
//             const pk = info.data;
//             return {
//                 id: pk.id,
//                 name: pk.name,
//                 types: pk.types.map((e) => e.type.name),
//                 image: pk.sprites.other.home.front_default,
//                 hp: pk.stats[0].base_stat,
//                 attack: pk.stats[2].base_stat,
//                 defense: pk.stats[5].base_stat,
//                 height: pk.height,
//                 weight: pk.weight,
//             };
//         });

//         const getAllPokemon = await Promise.all(dataPokemon);
//         return getAllPokemon;
//     } catch (error) {
//         throw new Error(error.message);
//     }
// };

// const getPokemonDb = async () => {
//     try {
//         const allPokemonDb = await Pokemon.findAll({
//             include: {
//                 model: Types,
//                 attributes: ['name'],
//             },
//         });

//         const mapPokemon = allPokemonDb.map((e) => {
//             const typeArray = e.Types ? e.Types.map((type) => type.name) : [];

//             return {
//                 id: e.id,
//                 name: e.name,
//                 image: e.image,
//                 types: typeArray,
//                 hp: e.hp,
//                 attack: e.attack,
//                 defense: e.defense,
//                 speed: e.speed,
//                 height: e.height,
//                 weight: e.weight,
//                 createdInDb: e.createdInDb,
//             };
//         });
//         return mapPokemon;
//     } catch (error) {
//         throw new Error(error.message);
//     }
// };

// const getPokemonByName = (allPokemon, name) => {
//     const pokemonName = allPokemon.filter((e) => e.name.toLowerCase() === name.toLowerCase());

//     if (pokemonName.length > 0) {
//         return pokemonName;
//     } else {
//         throw new Error(`No se encontró ningún Pokémon llamado ${name}`);
//     }
// };

// const getAllPokemonController = async (name) => {
//     const pokemonDb = await getPokemonDb();
//     const pokemonApi = await getPokemonsApi();

//     const allPokemon = pokemonDb.concat(pokemonApi);

//     if (name) {
//         return getPokemonByName(allPokemon, name);
//     }

//     return allPokemon;
// };

// module.exports = { getAllPokemonController };


const { Pokemon, Types } = require('../db');
const axios = require('axios');

// Objeto de caché para almacenar los datos de la API
const apiCache = {};

// Función para obtener datos de PK desde la API o desde la caché
const getPokemonsApi = async () => {
    try {
        // Verificar si los datos están en caché y devolverlos
        if (apiCache.pokemonData) {
            return apiCache.pokemonData;
        }

        // Si los datos no están en caché, hacer la solicitud a la API
        const api = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=300');
        const pokemonApi = await api.data.results;

        // Obtener datos detallados de cada Pokémon y formatearlos
        const dataPokemon = await Promise.all(pokemonApi.map(async (pokemon) => {
            const info = await axios.get(pokemon.url);
            const pk = info.data;
            return {
                id: pk.id,
                name: pk.name,
                types: pk.types.map((e) => e.type.name),
                image: pk.sprites.other.home.front_default,
                hp: pk.stats[0].base_stat,
                attack: pk.stats[2].base_stat,
                defense: pk.stats[5].base_stat,
                height: pk.height,
                weight: pk.weight,
            };
        }));

        // Almacenar datos en caché por 1 hora (3600000 milisegundos)
        apiCache.pokemonData = dataPokemon;
        setTimeout(() => {
            delete apiCache.pokemonData;
        }, 3600000);

        return dataPokemon;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Función para obtener datos de la base de datos
const getPokemonDb = async () => {
    try {
        // Obtener datos de la base de datos y formatearlos
        const allPokemonDb = await Pokemon.findAll({
            include: {
                model: Types,
                attributes: ['name'],
            },
        });

        const mapPokemon = allPokemonDb.map((e) => {
            const typeArray = e.Types ? e.Types.map((type) => type.name) : [];

            return {
                id: e.id,
                name: e.name,
                image: e.image,
                types: typeArray,
                hp: e.hp,
                attack: e.attack,
                defense: e.defense,
                speed: e.speed,
                height: e.height,
                weight: e.weight,
                createdInDb: e.createdInDb,
            };
        });
        return mapPokemon;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Función para buscar un Pokémon por nombre en la lista combinada de la API y la base de datos
const getPokemonByName = (allPokemon, name) => {
    const pokemonName = allPokemon.filter((e) => e.name.toLowerCase() === name.toLowerCase());

    if (pokemonName.length > 0) {
        return pokemonName;
    } else {
        throw new Error(`No se encontró ningún Pokémon llamado ${name}`);
    }
};

// Controlador principal para obtener todos los Pokémon
const getAllPokemonController = async (name) => {
    const pokemonDb = await getPokemonDb();
    const pokemonApi = await getPokemonsApi();

    // Combinar datos de la API y la base de datos
    const allPokemon = pokemonDb.concat(pokemonApi);

    if (name) {
        // Si se proporciona un nombre, buscar el Pokémon por nombre
        return getPokemonByName(allPokemon, name);
    }

    // Si no se proporciona un nombre, devolver todos los Pokémon
    return allPokemon;
};

module.exports = { getAllPokemonController };