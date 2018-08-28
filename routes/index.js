const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/ana', (req, res, next) => {
  res.render('ana');

router.get('/jen', (req, res, next) => {
  res.render('jen');
});

router.get('/carla', (req, res, next) => {
  res.render('carla');
});

module.exports = router;
