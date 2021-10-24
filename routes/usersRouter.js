const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = require('../middlewares/muterImageUser')
const validationRegister = require('../validations/validationRegister')
const imageValidation = require('../validations/imageValidation')

const {login, register, profile, processRegister} = require('../controllers/usersController')

router.get('/login', login);

/*PROCESA LOGIN */
router.post('/login', login);
router.get('/register', register);

/*PROCESA REGISTRO */
router.post('/register',upload.single('foto'), validationRegister, imageValidation, processRegister);


router.get('/profile', profile);


module.exports = router;