const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/nicole', (req, res, next) => {
  res.render('nicole');
});

router.get('/ana', (req, res, next) => {
  res.render('ana');
});

router.get('/nhan', (req, res, next) => {
  res.render('nhan');
});

router.get('/ana', (req, res, next) => {
  res.render('ana');
});

router.get('/maxence', (req, res, next) => {
  res.render('maxence');
});

router.get('/jessica', (req, res, next) => {
  res.render('jessica');
});

router.get('/flo', (req, res, next) => {
  res.render('flowantsicecream');
});

router.get('/jen', (req, res, next) => {
  res.render('jen');
});
router.get('/carla', (req, res, next) => {
  res.render('carla');
});

router.get('/maxence', (req, res, next) => {
  res.render('maxence');
});

router.get('/anita-kash', (req, res, next) => {
  res.render('anita-kash');
});

router.get('/alina', (req, res, next) => {
  res.render('Alina');
});

module.exports = router;
