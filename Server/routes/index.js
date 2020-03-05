const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const passport = require('passport');
const clothes = require("../models/Clothes")
const uploadCloud = require("../configs/cloudinary.js");
var cloudinaryStorage = require('multer-storage-cloudinary');
const mongoose = require ("mongoose")
/* GET home page */

router.get('/', (req, res, next) => {
  res.render('index');
});


router.post(
  "/new-clothes",
  uploadCloud.single("image"),
  (req, res, next) => {
    let clothes = {
      category: req.body.category,
      storm: req.body.storm,
      wind: req.body.wind,
      type: req.body.type,
    };
    if (req.file) {
      event.image = req.file.url;
    }
    clothes.create(clothes).then(() => {
      res.redirect("/closet");
    });
  });
  
  
  router.get("/closet", (req, res, next) => {
    clothes.find()
    .then(clothesFound => {
      let info = {
        clothes: clothesFound
      };
      if (req.user) {
        info.id = req.user.id;
      }
      res.json("results", info);
    })
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
  });

  module.exports = router;