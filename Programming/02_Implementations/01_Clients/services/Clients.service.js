const { MongoConnection } = require('../lib/Mongo');

//coleccion
const COLLECTION = "Clients"

const findUsers = () => 
new Promise( async (resolve, reject) => {
try{
//Inicializo mongoclient para que me retorne
//configuracion de la db
    const DB = await MongoConnection();
    //obtenemos la collection 
    const clients = DB.collection(COLLECTION);
    const clientsList = await clients.find({}).toArray();
    resolve(clientsList);
} catch (error){
    reject(error);
}
});
const createUser= (user) => 
new Promise(async(resolve,reject)=>{
    try {
    const DB= await MongoConnection();
    const clients=DB.collection(COLLECTION);
    const result=await clients.insertOne(user); 
    resolve(result);
    } catch (error) {
       reject(error) 
    }
});

module.exports = {
    findUsers,
    createUser,
};