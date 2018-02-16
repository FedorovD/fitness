const Router = require('express');
const DB = require('../db/index');
const AccountRep = require('../repositories/accounts');
const AccountLogic = require('../logic/accounts');
const router = Router();

router.post('/login', function (req, res, next) {
  res.json({success: true, user: req.body});
});

router.post('/register',async function (req, res, next) {
  let result = await new AccountLogic(new AccountRep(DB)).insertUser(req.body);
  res.json({
    success: result.success,
    isActivated: result.isActivated,
    id: result.id,
    msg: result.msg
  });
});

module.exports = router;
