const express = require('express');
const router = express.Router();

const auth = require('../controllers/auth.controller');


router.post('/login', auth.login);
router.post('/register', auth.register);
router.post('/restorePassword', auth.restorePassword);
router.post('/changePass', auth.changePass);

module.exports = router;