const mongoose = require('mongoose');
const validate = require('mongoose-validator');


const titleValidator = [
  validate({
    validator: 'isLength',
    arguments: [0, 40],
    message: 'Name must not exceed {ARGS[1]} characters.'
  })
];

const imageurlValidator = [
  validate({
    validator: 'isLength',
    arguments: [0, 200],
    message: 'Image URL must not exceed characters.'
  })
];

const languageValidator = [
  validate({
    validator: 'isLength',
    arguments: [0, 40],
    message: 'Language must not exceed {ARGS[1]} characters.'
  })
];

const formatValidator = [
  validate({
    validator: 'isLength',
    arguments: [0, 40],
    message: 'Format must not exceed {ARGS[1]} characters.'
  })
];

const authorValidator = [
  validate({
    validator: 'isLength',
    arguments: [0, 40],
    message: 'Author must not exceed {ARGS[1]} characters.'
  })
];

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Name is required.'],
    validate: titleValidator
  },
  imageurl: {
    type: String,
    required: [true, 'Image Url is required.'],
    validate: imageurlValidator
  },
  language: {
    type: String,
    validate: languageValidator
  },
  format: {
    type: String,
    validate: formatValidator
  },
  author: {
    type: String,
    validate: authorValidator
  }
});


const Book = mongoose.model('book', BookSchema);

module.exports = Book;
