const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/jen', (req, res, next) => {
  res.render('jen');
});

router.get('/carla', (req, res, next) => {
  res.render('carla');
});

<<<<<<< HEAD
router.get('/anita', (req, res, next) => {
  res.render('anita');
});
module.exports = router;
=======
module.exports = router;
>>>>>>> a85d2a3dbb74a3da9b4a9f015a59c1e02959b4a0
