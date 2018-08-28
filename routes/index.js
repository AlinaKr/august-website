const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/nicole', (req, res, next) => {
  res.render('nicole')
})
router.get('/jen', (req, res, next) => {
  res.render('jen');
});
router.get('/carla', (req, res, next) => {
  res.render('carla');
});
router.get('/maxence', (req, res, next) => {
  res.render('maxence');
});
module.exports = router;
