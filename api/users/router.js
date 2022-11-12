const { saveUser } = require('./controller');
const router = require('express').Router();

const { checkToken } = require('./../middleware/authMiddleware');
router.post('/', checkToken , saveUser);


module.exports = router;