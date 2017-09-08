const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/book', function(req,res,next){
  res.send({type: 'GET !'});
});

router.post('/book', (req, res) => {

  let newBook = new Book({
    title: req.body.title,
    imageurl: req.body.imageurl,
    language: req.body.language,
    format: req.body.format,
    author: req.body.author
  });

  newBook.save((err) => {

    if(err) {
      if (err.errors) {

        if (err.errors.title) {
          res.status(400).json({ success: false, msg: err.errors.title.message });
          return;
        }

        if (err.errors.imageurl) {
          res.status(400).json({ success: false, msg: err.errors.imageurl.message });
          return;
        }

        if (err.errors.language) {
          res.status(400).json({ success: false, msg: err.errors.language.message });
          return;
        }

        if (err.errors.format) {
          res.status(400).json({ success: false, msg: err.errors.format.message });
          return;
        }

        if (err.errors.author) {
          res.status(400).json({ success: false, msg: err.errors.author.message });
          return;
        }

        // Show failed if all else fails for some reasons
        res.status(400).json( { success: false, msg: 'Failed to add Book.'});
      }
    }

    else {
      res.json({ success: true, msg: 'Successfully added Book.' });
    }
  });
});

module.exports = router;
