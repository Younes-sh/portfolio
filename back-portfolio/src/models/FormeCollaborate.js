const mongoose = require('mongoose');
const timeStamp = require('mongoose-timestamp');

const schemaFormeCollaborate = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required:true},
    yourSubject:{type: String, required:true},
    message:{type: String, required:true}
})

schemaFormeCollaborate.plugin(timeStamp); 
const Collaborate = mongoose.model("Collaborate", schemaFormeCollaborate);

module.exports = Collaborate;