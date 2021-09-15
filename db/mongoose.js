const mongoose = require('mongoose');
const db = require('../index');
const Role = db.role;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL,{
      useNewUrlParser:true,
      useUnifiedTopology:true
  });
  
  console.log(`Mongoose connect to ${conn.connection.host} `);
    
  } catch (error) {
      console.log(`Error : ${error.message}`);
      process.exit(1);
  }
}

function initial(){
  Role.estimatedDocumentCount((err,count) => {
    if(!err && count === 0){
      new Role({
        name:"user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

module.exports = connectDB