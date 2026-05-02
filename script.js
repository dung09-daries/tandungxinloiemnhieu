body {
  margin: 0;
  background: linear-gradient(to right, #ff758c, #ff7eb3);
  font-family: Arial;
  color: white;
  text-align: center;
  overflow: hidden;
}

/* nội dung */
.content {
  margin-top: 100px;
}

h1 {
  font-size: 50px;
}

p {
  font-size: 20px;
  width: 70%;
  margin: auto;
}

/* nút */
button {
  margin-top: 20px;
  padding: 15px 30px;
  border-radius: 30px;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.yes {
  background: white;
  color: red;
}

.no {
  background: black;
  color: white;
  position: absolute;
}

/* nhạc */
.music {
  position: fixed;
  bottom: 10px;
  left: 10px;
  width: 250px;
  height: 80px;
}

.music iframe {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

/* tim rơi */
.heart {
  position: absolute;
  color: red;
  animation: fall linear infinite;
}

@keyframes fall {
  0% { transform: translateY(-10px); }
  100% { transform: translateY(100vh); }
}
