const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    userid:{
        type: String,
        required: true
    },
    userpass:{
        type: String,
        required: true
    }

})

const User = mongoose.model("Users", UserSchema);

module.exports = User;