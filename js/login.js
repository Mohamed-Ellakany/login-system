let loginMail = document.getElementById("loginMail");
let loginPass = document.getElementById("loginPass");
let loginBtn = document.getElementById("loginBtn");
let users;
let userNameInput;
let currentIndex;
if (localStorage.getItem("user") != null) {
  users = JSON.parse(localStorage.getItem("user"));
} else {
  users = [];
}
loginBtn.addEventListener("click", function () {
  if (checkMail()) {
    if (checkpass()) {
      userNameInput = users[currentIndex].userName;
      localStorage.setItem("currentIndex", currentIndex);
      open("../welcome/index.html");
    }
  }
});

function checkpass() {
  for (currentIndex = 0; currentIndex < users.length; currentIndex++) {
    if (
      users[currentIndex].userPass.toLowerCase().trim() ==
      loginPass.value.toLowerCase().trim()
    ) {
      return true;
    }
  }
  alert("pass is wrong");
  return false;
}
function checkMail() {
  for (currentIndex = 0; currentIndex < users.length; currentIndex++) {
    if (
      users[currentIndex].userEmail.toLowerCase().trim() ==
      loginMail.value.toLowerCase().trim()
    ) {
      return true;
    }
  }
  alert(" mail is wrong");
  return false;
}
