const {getAllPokemonController}=require('../controllers/getAllPKControllers')


// Definición de la función getById que toma un ID como parámetro
const getById=async(id)=>{
    // Obtiene todos los Pokémon llamando a la función getAllPokemonController
    const all=await getAllPokemonController();
    // Filtra los Pokémon por ID, convirtiendo el ID a cadena para comparar
    const byid=await all.filter((e)=>String(e.id)===id);
     // Si se encuentra algún Pokémon con el ID proporcionado, devuelve los Pokémon
    if(byid.length){
        return byid;
    }else{
        throw new Error(`Pokemon no encontrado,id:${id} incorrecto   `);

    }
}
module.exports={getById}