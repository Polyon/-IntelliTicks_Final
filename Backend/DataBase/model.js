const Mongoose = require('mongoose');

let WealthSchema = new Mongoose.Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    size:{
        type: String
    },
    isActive:{
        type: Boolean,
        default: 1
    }
});

const WealthModel = new Mongoose.model('Property', WealthSchema);

module.exports = WealthModel;