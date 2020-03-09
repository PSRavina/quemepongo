// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js
require('dotenv').config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Clothe = require("../models/Clothes");
const User = require("../models/User");
const dbtitle = `qemepongo`
const bcryptSalt = 10;

mongoose
  .connect(`${process.env.DB_LOCAL}`, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

let users = [
  {
    username: "Pedro",
    password: bcrypt.hashSync("Pedro", bcrypt.genSaltSync(bcryptSalt)),
    Clothes:[],
  },
  {
    username: "maria",
    password: bcrypt.hashSync("maria", bcrypt.genSaltSync(bcryptSalt)),
    Clothes:[],
  }
]



let clothes = [
  {
    category: "soleado",
    storm: "No",
    wind: "Si",
    type: "formal",
    image: "https://images-na.ssl-images-amazon.com/images/I/61mlVWKOuRL._UX679_.jpg",
  },

  {
    category: "medio",
    storm: "Si",
    wind: "Si",
    type: "formal",
    image: "",
  },
  {
    category: "frio",
    storm: "No",
    wind: "No",
    type: "workwear",
    image: "",
  },
  {
    category: "soleado",
    storm: "Si",
    wind: "No",
    type: "casual",
    image: "",
  },
  {
    category: "soleado",
    storm: "Si",
    wind: "No",
    type: "casual",
    image: "",
  },
  {
    category: "soleado",
    storm: "Si",
    wind: "No",
    type: "casual",
    image: "",
  },
  {
    category: "soleado",
    storm: "Si",
    wind: "No",
    type: "casual",
    image: "",
  },
  {
    category: "soleado",
    storm: "Si",
    wind: "No",
    type: "casual",
    image: "",
  },
  {
    category: "soleado",
    storm: "Si",
    wind: "No",
    type: "casual",
    image: "",
  }

]



User.deleteMany()
  .then(() => {
    return User.create(users)
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created with the following id:`);
    console.log(usersCreated.map(u => u._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })


Clothe.deleteMany()
  .then(() => {
    return Clothe.create(clothes)
  })
  .then(clothesCreated => {
    console.log(`${clothesCreated.length} clothes created id:`);
    console.log(clothesCreated.map(u => u._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })



// category: String, enum:["soleado", "medio", "frio"],
//   storm: Boolean,
//   wind: Boolean,
//   type: String, enum:["sportswear", "formal", "casual", "workwear"]