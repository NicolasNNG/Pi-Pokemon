const {getAllPokemonController}=require('../controllers/getAllPKControllers')
const {getById}=require('../controllers/getById');
const {postPokemon}=require('../controllers/getCreatePokemon')


const getAllPokemonHandler = async(req, res) =>{
   
    const {name} = req.query
    
   try {
    const Pokemon = await getAllPokemonController(name)
    res.status(200).send(Pokemon);
   } catch (error) {
    res.status(400).send({error: error.message})
   }
}

// const getPokemonNameHandler=async(req,res)=>{
//     const {name}=req.query
//     try{
//         const Pokemon=await getAllPokemonController(name)
//         res.status(200).send(Pokemon);
//     }catch(error){
//         res.status(400).send({error:error.message})
//     }
// }


const getByIdHandlers=async(req,res)=>{
    const {id}=req.params
    try{
        const PokemonsId=await getById(id)
        res.status(200).send(PokemonsId);
    }catch(error){
        res.status(400).send({error:error.message})
    }
}
const postCreatePokemonHandlers=async(req,res)=>{
    const {
        name,
        hp,
        attack,
        defense,
        speed=null,
        height=null,
        weight=null,
        image,
        createdInBd=true,
        types,
    }=req.body;
    try{
        const pokemon=await postPokemon(
            name,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            image,
            createdInBd,
            types,
        );
        res.status(200).json(pokemon);        

    }catch(error){
        res.status(400).json({error:error.message});
    }
}


module.exports={getAllPokemonHandler,
               
                getByIdHandlers,
                postCreatePokemonHandlers,
                
                }