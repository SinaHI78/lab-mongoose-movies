const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/routes/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render('celebrities', { celebrities });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/');
