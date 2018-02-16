const Router = require('express');
const accounts = require('./accounts');
const router = Router();

router.use(accounts);

module.exports = router;