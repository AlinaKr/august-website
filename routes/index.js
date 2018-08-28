const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/jessica', (req, res, next) => {
  res.render('jessica');
});

module.exports = router;

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
router.get('/anita', (req, res, next) => {
  res.render('anita');
});
module.exports = router;
>>>>>>> a98407b038e91dbc43ed475389a8383a13141587
