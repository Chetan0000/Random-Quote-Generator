const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://chetandev:Chetandev1@cluster0.g4pfbhx.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error' , console.error.bind(console.log(`Error in connecting to Mongodb data base`)));

db.once('open' , () => {
    console.log(`Connected to Data Base : MongoDb`);
});


module.exports = db;