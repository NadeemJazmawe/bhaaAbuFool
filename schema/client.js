const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Users 

const ClientSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String
    },
    mail:{
        type: String
    }
})


const Client = mongoose.model("Clients", ClientSchema);

module.exports = Client;