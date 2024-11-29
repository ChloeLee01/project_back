const multer = require("multer");

const storage = multer.memoryStorage(); // 이미지 메모리에 임시 저장 후 저장
const upload = multer({ storage});

module.exports = upload;

