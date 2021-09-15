const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true
    }
})

// roleSchema.virtual('roles',{
//     ref:'User',
//     localField:'_id',
//     foreignField:'roles'
// })

const Role = mongoose.model('Role',roleSchema);
module.exports = Role;