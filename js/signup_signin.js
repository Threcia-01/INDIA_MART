function togglePassword() {
  const passwordField = document.getElementById("password");
  const toggleIcon = document.querySelector(".toggle-password");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleIcon.textContent = "🙈"; 
  } else {
    passwordField.type = "password";
    toggleIcon.textContent = "👁️"; 
  }
}

// the login button
const loginBtn = document.getElementById("login-button");

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    alert("Successfully logged in!");
    window.location.href = "../index.html";
  });
}

console.log("Login button:", loginBtn);


