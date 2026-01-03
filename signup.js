document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();
  let cpassword = document.getElementById("cpassword").value.trim();
  let errorMsg = document.getElementById("errorMsg");

  if (username === "" || password === "" || cpassword === "") {
    errorMsg.textContent = "All fields are required!";
    errorMsg.style.color = "red";
    return;
  }
  else if (username.length < 4) {
    errorMsg.textContent = "Username must be at least 4 characters long!";
    errorMsg.style.color = "red";
    return;
  }
  else if (password.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters long!";
    errorMsg.style.color = "red";
    return;
  }
  else if (!/[A-Z]/.test(password)) {
    errorMsg.textContent = "Password must contain at least one uppercase letter!";
    errorMsg.style.color = "red";
    return;
  }
  else if (!/[0-9]/.test(password)) {
    errorMsg.textContent = "Password must contain at least one number!";
    errorMsg.style.color = "red";
    return;
  }
  else if (!/[!@#$%^&*]/.test(password)) {
    errorMsg.textContent = "Password must contain at least one special character (!@#$%^&*)!";
    errorMsg.style.color = "red";
    return;
  }
  else if (password.length < 8) {
    errorMsg.textContent = "Password must be at least 8 characters long!";
    errorMsg.style.color = "red";
    return;
  }
  else if (/\s/.test(password)) {
    errorMsg.textContent = "Password should not contain spaces!";
    errorMsg.style.color = "red";
    return;
  }
  else if (password.length > 20) {
    errorMsg.textContent = "Password should not exceed 20 characters!";
    errorMsg.style.color = "red";
    return;
  }
  else if (!/^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/.test(password)) {
    errorMsg.textContent = "Password contains invalid characters!";
    errorMsg.style.color = "red";
    return;
  }

  if (password !== cpassword) {
    errorMsg.textContent = "Passwords do not match!";
    errorMsg.style.color = "red";
    return;
  }

  let user = {
    username: username,
    password: password
  };

  localStorage.setItem("user", JSON.stringify(user));

  errorMsg.textContent = "Signup successful! Redirecting to login...";
  errorMsg.style.color = "green";
  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
});
