const router = require("express").Router(); // express 모듈에서 Router 클래스 import
const { postAuth, postLogin } = require("../controllers/postAuthCtrl");
const upload = require("./upload");

router.post("/register", upload.single("profile_img"), postAuth);
router.post("/login", postLogin);

module.exports = router;
