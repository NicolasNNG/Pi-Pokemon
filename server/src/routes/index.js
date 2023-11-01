const { Router } = require('express');
const pokemonRouter=require('./pokemonRouter');
const {getAllTypeHandler}=require ('../handlers/typeHandler')
const router = Router();
router.use('/pokemon',pokemonRouter)
router.use('/type',getAllTypeHandler)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
