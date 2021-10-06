const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    name: {
        type:String,
        trim:true,
        required:true
    },
    age: {
        type:String,
        trim:true,
        required:true
    },
    job_description: {
        type:String,
        trim:true,
        required:true
    },
    salary: {
        type:String,
        trim:true,
        required:true
    },
    department: {
        type:String,
        trim:true,
        required:true
    }
})

const Employee = mongoose.model('Employee',empSchema);
module.exports = Employee;