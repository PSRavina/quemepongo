const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  category: String, enum:["soleado", "medio", "frio"],
  storm: Boolean,
  wind: Boolean,
  type: String, enum:["sportswear", "formal", "casual", "workwear"],
  image: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Clothes = mongoose.model('Clothes', userSchema);
module.exports = Clothes;
