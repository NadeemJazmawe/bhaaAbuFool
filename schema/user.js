const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Users 

const UserSchema = new Schema({
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


const Users = mongoose.model("Users", UserSchema);

module.exports = Users;