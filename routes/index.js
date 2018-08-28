const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

<<<<<<< HEAD

router.get('/ana', (req, res, next) => {
  res.render('ana');
=======
router.get('/carla', (req, res, next) => {
  res.render('carla');
>>>>>>> 471662cac1983c15718c2834940c03696ba6fb7f
});
module.exports = router;
