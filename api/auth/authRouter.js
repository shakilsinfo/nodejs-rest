const { login } = require('./authController');
const router = require('express').Router();
const { loginValidation } = require('./../validation/login/login.validation');

router.post('/',loginValidation, login);

module.exports = router;