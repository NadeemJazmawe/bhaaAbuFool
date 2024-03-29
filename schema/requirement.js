const { text } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequiremnetSchema = new Schema({
    from:{
        type: String,
        required: true
    },
    to:{
        type: String,
        required: true
    },
    text:{
        type: String,
        required: true
    },
    startDate:{
        type: String
    },
    endDate:{
        type: String
    },
    done:{
        type: Boolean
    }

})

const Requirment = mongoose.model("Requirement", RequiremnetSchema);

module.exports = Requirment;