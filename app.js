const express = require('express');
const app = express();
const cors = require('cors');

const User = require('./models/user');
const Role = require('./models/role');

const connectDB = require('./db/mongoose');
connectDB();

const port = process.env.PORT;

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

require('./routes/auth.route')(app);
require('./routes/user.routes')(app);

app.post('/users',async (req,res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
})

app.get('/users',async (req,res) => {
    try {
        const users = await User.find({});
        res.send(users);
    }  catch (e) {
        res.status(400).send(e);
    }  
})

app.get('/roles',async (req,res) => {
    try {
        const roles = await Role.find({});
        res.send(roles);
    }  catch (e) {
        res.status(400).send(e);
    }  
})

app.listen(port,() => {
    console.log('Server is up on port ' + port);
})