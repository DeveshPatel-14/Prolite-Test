const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/prolitetest"

const connectToMongo = ()=>{
    mongoose.set('strictQuery', false);

    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })


}

module.exports = connectToMongo;