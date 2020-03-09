const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const passport = require('passport');
const Clothes = require("../models/Clothes")
const uploadCloud = require("../configs/cloudinary.js");
var cloudinaryStorage = require('multer-storage-cloudinary');
const mongoose = require("mongoose")
/* GET home page */

router.get('/', (req, res, next) => {
  res.json('index');
});

router.get("/closet", (req, res, next) => {
  Clothes.find()
    .then(clothesFound => {
      res.json(clothesFound);
    })
    .catch(err => console.log(err));
});

router.post(
  "/new-clothes",
  (req, res, next) => {
    let clothe = {
      category: req.body.category,
      storm: req.body.storm,
      wind: req.body.wind,
      type: req.body.type,
      image: req.body.image
    };
    Clothes.create(clothe).then(() => {
      res.json(clothe);
    });
  });

router.delete("/delete-clothes/:id", (req, res, next) => {
  Clothes.findByIdAndDelete(req.params.id).then(clothe => {
    res.json(clothe);
  })
  .catch(err => console.log(err))

});
module.exports = router;