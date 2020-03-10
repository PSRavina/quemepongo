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
    prenda:"pantalon",
    category: "soleado",
    storm: "No",
    wind: "Si",
    type: "formal",
    image: "https://images-na.ssl-images-amazon.com/images/I/61mlVWKOuRL._UX679_.jpg",
  },

  {
    prenda:"blusa/camiseta",
    category: "medio",
    storm: "Si",
    wind: "Si",
    type: "formal",
    image: "https://image-tb.vova.com/image/500_500/filler/27/68/a5e8f9d444a74f28e6a48d59d3a62768.jpg?format=webp",
  },
  {
    prenda:"blusa/camiseta",
    category: "frio",
    storm: "No",
    wind: "No",
    type: "workwear",
    image: "https://cdn-geographicalnorway.sistemaip.net/media/catalog/product/cache/image/1024x1024/e9c3970ab036de70892d86c6d221abfe/B/O/BOOMERANG_MEN_BLACK_068_ROL_7_BLACK_a.jpg",
  },
  {
    prenda:"abrigo",
    category: "soleado",
    storm: "Si",
    wind: "No",
    type: "casual",
    image: "https://img10.joybuy.com/N0/s560x560_jfs/t1/20664/18/6480/59910/5c506325Eafabb29e/5d31a3463d57b5cc.jpg.dpg",
  },
  {
    prenda:"vestido",
    category: "soleado",
    storm: "Si",
    wind: "No",
    type: "casual",
    image: "https://images-na.ssl-images-amazon.com/images/I/61kQBsQIALL._UX522_.jpg",
  },
  {
    prenda:"chaqueta",
    category: "soleado",
    storm: "Si",
    wind: "No",
    type: "casual",
    image: "https://mujer-ropa-tops.eu/wp-content/uploads/2019/06/darringls-camisetas-cortas-hombre-manga-corta-camisetas-verano-cuadros-impresin-t-shirt-blusas-camisas-tops-personalidad-blanco-cuadros-de-gato-de-la-marque-dar.jpg",
  },
  {
    prenda:"abrigo",
    category: "soleado",
    storm: "Si",
    wind: "No",
    type: "casual",
    image: "https://img.tenniswarehouse-europe.com/watermark/rs.php?path=NMWCFPP-BL-1.jpg&nw=600",
  },
  {
    prenda:"pantalon",
    category: "soleado",
    storm: "Si",
    wind: "No",
    type: "casual",
    image: "https://image-tb.vova.com/image/500_500/filler/b7/bf/f63cc69482f2820a9728f72050c8b7bf.jpg?format=webp",
  },
  {
    prenda:"chaqueta",
    category: "soleado",
    storm: "Si",
    wind: "No",
    type: "casual",
    image: "https://www.king55.com.br/estatico/king/images/produto/15858.jpeg",
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