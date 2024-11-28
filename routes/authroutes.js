const router = require('express').Router(); // express 모듈에서 Router 클래스 import
const { postAuth, postLogin } = require("../controllers/postAuthCtrl");

router.post("/register", postAuth); 
router.post("/login", postLogin); 

module.exports = router;