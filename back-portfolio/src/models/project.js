const mongoose = require('mongoose');
const timeStamp = require('mongoose-timestamp');

const schemaProject = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    UrlImage:{type:String,required:true},
    directLink:{type:String,required:true},
    details:{type:String,required:true},
    UrlVideo:{type:String,required:true}
})

schemaProject.plugin(timeStamp)
const Project = mongoose.model("Project", schemaProject)

module.exports = Project;