const  {DataTypes, Sequelize}=require('sequelize');
module.exports=(Sequelize)=>{
    //Defino el modelo 
Sequelize.define('Types',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
},{freezeTableName:true, timestamps:false})
}