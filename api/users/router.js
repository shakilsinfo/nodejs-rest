const { saveUser } = require('./controller');
const router = require('express').Router();

const { checkToken } = require('./../middleware/authMiddleware');
const { userValidation } = require('./../validation/users/user.validation');

router.post('/', checkToken , userValidation, saveUser);


module.exports = router;