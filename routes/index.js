const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

<<<<<<< HEAD
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
=======
router.get('/nhan', (req, res, next) => {
  res.render('nhan');
});

router.get('/ana', (req, res, next) => {
  res.render('ana');
});
>>>>>>> 2ef2b768654402991793b9acf2d249a822d36eec

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

router.get('/anita-kash', (req, res, next) => {
  res.render('anita-kash');
});

>>>>>>> d43901ca584910e05c526cce2e37a4e10afb81fa
module.exports = router;

