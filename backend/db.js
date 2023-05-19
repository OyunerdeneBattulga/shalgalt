const mongoose = require('mongoose')
const uri = "mongodb+srv://oyuka123:oyuka123@cluster0.sow2l4g.mongodb.net/?retryWrites=true&w=majority"


const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log("database is successfully connected")
    }catch(error){
        console.log(error)
    }
}



module.exports = connect;