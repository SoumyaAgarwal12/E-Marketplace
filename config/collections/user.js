const mongoose = require('mongoose');
const collectionName = "Users";

// A Mongoose Schema defines the structure and property of the document in the MongoDB collection
const productSchema = new mongoose.Schema({
    name : String,
    phone : Number,
    email : String,
    password : String
})

// BY mongoose Schema, we have defined : only these fields will be present in our products Collection(table) and that field will be string or number datatype.
// i.e. we have implemented validations by mongoose. 
// Mongoose gives us advanced facilites over MongoDB. 

module.exports = mongoose.model(collectionName, productSchema); 