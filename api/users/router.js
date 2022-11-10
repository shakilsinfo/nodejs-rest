const { saveUser } = require('./controller');
const router = require('express').Router();

router.post('/', saveUser);

module.exports = router;