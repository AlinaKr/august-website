const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

<<<<<<< HEAD
<<<<<<< HEAD

router.get('/ana', (req, res, next) => {
  res.render('ana');
=======
=======
router.get('/jen', (req, res, next) => {
  res.render('jen');
});

>>>>>>> a85d2a3dbb74a3da9b4a9f015a59c1e02959b4a0
router.get('/carla', (req, res, next) => {
  res.render('carla');
>>>>>>> 471662cac1983c15718c2834940c03696ba6fb7f
});

module.exports = router;
