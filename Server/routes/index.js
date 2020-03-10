const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const passport = require("passport");
const Clothes = require("../models/Clothes");
const uploadCloud = require("../configs/cloudinary.js");
var cloudinaryStorage = require("multer-storage-cloudinary");
const mongoose = require("mongoose");
/* GET home page */

router.post("/newclothes", (req, res, next) => {
  console.log(req.body);
  Clothes.create(req.body).then(newClothe => {
    res.json(newClothe);
  });
});

router.get("/", (req, res, next) => {
  res.json("index");
});

router.get("/closet", (req, res, next) => {
  Clothes.find()
    .then(clothesFound => {
      res.json(clothesFound);
    })
    .catch(err => console.log(err));
});

router.delete("/delete-clothes/:id", (req, res, next) => {
  Clothes.findByIdAndDelete(req.params.id)
    .then(clothe => {
      res.json(clothe);
    })
    .catch(err => console.log(err));
});

router.get("/closet/:id", (req, res, next) => {
  Clothes.findById(req.params.id)
    .then(clothe => {
      res.json(clothe);
    })
    .catch(err => console.log(err));
});
module.exports = router;
