let login=document.getElementById("loginForm");
login.addEventListener("submit", function (e) {
  e.preventDefault(); 

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let errorMsg = document.getElementById("errorMsg");

  let storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    errorMsg.textContent = "No account found. Please signup first.";
    errorMsg.style.color = "red";
    return;
  }

  if (username === storedUser.username && password === storedUser.password) {
    errorMsg.textContent = "Login successful! Redirecting...";
    errorMsg.style.color = "green";

    setTimeout(() => {
      window.location.href ="index.html"
    }, 2000);
  } else {
    errorMsg.textContent = "Invalid username or password!";
    errorMsg.style.color = "red";
  }
});
