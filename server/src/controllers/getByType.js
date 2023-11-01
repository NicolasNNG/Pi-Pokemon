const {Types}=require('../db')
const axios =require('axios');

//Funcion para obtener los tipos de Pokémon desde la API y almacenarlos en la BD
const getTypePokemon=async()=>{
    const types = await Types.findAll();
    
    // Si la base de datos está vacía, obtén los tipos de la API y guárdalos
    if (types.length === 0) {
      const apiResponse = await axios.get('https://pokeapi.co/api/v2/type/');
      const apiTypes = apiResponse.data.results;
      // Utiliza findOrCreate para crear o encontrar tipos en la base de datos
      await Promise.all(apiTypes.map(async (apiType) => {
        await Types.findOrCreate({
          where: { name: apiType.name },
          defaults: { name: apiType.name },
        });
      }));

      // Consulta nuevamente los tipos desde la base de datos
      const updatedTypes = await Types.findAll();
      return updatedTypes;
    } else {
      // Si la base de datos ya contiene tipos, responde con ellos
      return types;
    }

}

module.exports={
    getTypePokemon
}