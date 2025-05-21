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
