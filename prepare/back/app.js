/** @format */

const express = require("express");
// express 서버 구동
const app = express();
const port = 3065;
app.get("/", (req, res) => {
  res.send("hello express");
});
app.get("/api", (req, res) => {
  res.json([
    { id: 1, content: "hello" },
    { id: 2, content: "hello2" },
    { id: 3, content: "hello3" },
  ]);
});
app.get("/api/post", (req, res) => {
  res.json([
    { id: 1, content: "hello" },
    { id: 2, content: "hello2" },
    { id: 3, content: "hello3" },
  ]);
});
app.post("/api/post", (req, res) => {
  res.json([{ id: 1, content: "hello" }]);
});
app.delete("/api/post", (req, res) => {
  res.json([{ id: 1 }]);
});

app.listen(port, () => {
  console.log("서버 실행 중", port);
});

// app.get 가져오기
// app.post 생성
// app.put 전체수정
// app.delete 삭제
// app.patch 부분수정
// app.options 찔러보기
// app.head 헤더만 가져오기
