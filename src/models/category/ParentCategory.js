const mongoose = require('mongoose');

const parentCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String, 
    required: true
  }
});

const ParentCategory = mongoose.model('ParentCategory', parentCategorySchema);

module.exports = ParentCategory;
