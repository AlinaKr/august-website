const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

<<<<<<< HEAD
<<<<<<< HEAD
router.get('/nicole', (req, res, next) => {
  res.render('nicole')
})
=======
=======
router.get('/ana', (req, res, next) => {
  res.render('ana');
>>>>>>> 6900225d64cc4da20b01ecdbae35b3bb05272a0c

router.get('/jessica', (req, res, next) => {
  res.render('jessica');
});

>>>>>>> d43901ca584910e05c526cce2e37a4e10afb81fa
router.get('/jen', (req, res, next) => {
  res.render('jen');
});
router.get('/carla', (req, res, next) => {
  res.render('carla');
});
<<<<<<< HEAD
router.get('/maxence', (req, res, next) => {
  res.render('maxence');
});
=======

router.get('/anita', (req, res, next) => {
  res.render('anita');
});

>>>>>>> d43901ca584910e05c526cce2e37a4e10afb81fa
module.exports = router;

