const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        trim:true
    },

    password: {
        type:String,
        required:true,
        trim:true
    },
    roles: [
        { 
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Role'
        }
    ]
})

userSchema.pre('save', async function(next){
    const user = this;

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8);
    }

    next();
})

const User = mongoose.model('User',userSchema);
module.exports = User;