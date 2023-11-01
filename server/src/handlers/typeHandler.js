const {getTypePokemon}=require('../controllers/getByType')

const getAllTypeHandler=async(req,res)=>{
    try{
        const types=await getTypePokemon()
        res.status(200).send(types)
    }catch(error){
        res.status(400).send({error:error.message})
    }
}
module.exports={getAllTypeHandler}