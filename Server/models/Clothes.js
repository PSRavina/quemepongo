const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({ 
  prenda: { type: String, enum: ["pantalon", "blusa/camiseta", "abrigo","chaqueta","vestido"] },
  category: { type: String, enum: ["soleado", "medio", "frio"] },
  storm: { type: String, enum: ["Si", "No"] },
  wind: { type: String, enum: ["Si", "No"] },
  type: { type: String, enum: ["sportswear", "formal", "casual", "workwear"] },
  image: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Clothes = mongoose.model('Clothes', userSchema);
module.exports = Clothes;
