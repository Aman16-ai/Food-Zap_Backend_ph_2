const mongoose = require('mongoose');

const childCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true
  },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ParentCategory',
    required: true
  }
});

const ChildCategory = mongoose.model('ChildCategory', childCategorySchema);

module.exports = ChildCategory;
