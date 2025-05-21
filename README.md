<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Nike-Inspired IT Login</title>
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
</head>
<body>

  <div class="login-container" id="loginForm">
    <h1>JUST LOGIN IT</h1>
    <input type="text" id="username" placeholder="Username">
    <input type="password" id="password" placeholder="Password">
    <button onclick="login()">LOGIN</button>
    <div class="quote">
      <p>“Innovation is the outcome of a habit, not a random act.” – Sukant Ratnakar</p>
      <p>“Any sufficiently advanced technology is indistinguishable from magic.” – Arthur C. Clarke</p>
    </div>
  </div>

  <div class="dashboard" id="dashboard">
    <h2>Welcome to the Dashboard</h2>
    <a href="https://docs.google.com/document/d/1G9r-NW-j2eZnFs54ykF0DGacjyPA0W5i6AJNa7_OjGw/edit?usp=sharing" target="_blank">📄 Google Docs</a>
    <a href="https://docs.google.com/spreadsheets/d/1lWvMNbwIgxNZDPD9t5WQXw0SOQCNhWD6uViWaDI2egA/edit?usp=sharing" target="_blank">📊 Google Sheets</a>
    <a href="https://docs.google.com/presentation/d/1mn1pYAw9ICu8LGSZw83C7B_ZTG2GLHsRD83Upqe0YgM/edit?usp=sharing" target="_blank">🎞 Google Slides</a>
  </div>

  <script>
    function login() {
      const user = document.getElementById('username').value;
      const pass = document.getElementById('password').value;

      if (user && pass) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
      } else {
        alert("Enter both username and password!");
      }
    }
  </script>

</body>
</html>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Anton', sans-serif;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.login-container {
  text-align: center;
  padding: 40px;
  border: 2px solid #fff;
  border-radius: 20px;
  width: 300px;
  background-color: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
}

h1 {
  font-size: 32px;
  margin-bottom: 20px;
  letter-spacing: 2px;
}

input[type="text"], input[type="password"] {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: none;
  border-radius: 8px;
  background: #222;
  color: white;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 12px;
  background: #fff;
  color: #000;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  font-weight: bold;
}

button:hover {
  background: #1e90ff;
  color: #fff;
}

.quote {
  margin-top: 20px;
  font-style: italic;
  font-size: 14px;
  opacity: 0.8;
}

.dashboard {
  display: none;
  text-align: center;
  padding: 40px;
}

.dashboard h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.dashboard a {
  display: block;
  margin: 10px 0;
  font-size: 20px;
  color: #1e90ff;
  text-decoration: none;
  transition: 0.2s;
}

.dashboard a:hover {
  text-decoration: underline;
}
function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (user && pass) {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
  } else {
    alert("Enter both username and password!");
  }
}

