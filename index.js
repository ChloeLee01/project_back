const PORT = 8000;

const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/authroutes")

const app = express(); // express 객체를 app으로 저장해 사용

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("auth server test running"); // .send 브라우저에 찍힘
});

app.use("/auth", authRouter) // http://localhost8000/auth/register

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
