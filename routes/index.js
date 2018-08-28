const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/ana', (req, res, next) => {
  res.render('ana');

router.get('/jessica', (req, res, next) => {
  res.render('jessica');
});

router.get('/jen', (req, res, next) => {
  res.render('jen');
});

router.get('/carla', (req, res, next) => {
  res.render('carla');
});

router.get('/anita-kash', (req, res, next) => {
  res.render('anita-kash');
});

module.exports = router;

