const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render('celebrities', { celebrities });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/celebrities/:id', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/show', celebrity);
    })
    .catch((error) => {
      console.log('Could not load celebrity', error);
      next(error);
    });
});

// Handle GET request for website root
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
