const PORT = 8000;

const express = require("express");
const cors = require("cors");
const path = require("path");
const authRouter = require("./routes/authroutes");

const app = express(); // express 객체를 app으로 저장해 사용

app.use(cors());
app.use(express.json());

app.use("/upload", express.static(path.join(__dirname, "upload"))); // 이미지 경로가 단순 문자열이 아닌 실제 경로 형태로 변경해주는 미들웨어 코드

app.get("/", (req, res) => {
  res.send("auth server test running"); // .send 브라우저에 찍힘
});

app.use("/auth", authRouter); // http://localhost8000/auth/register

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
