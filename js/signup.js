let signUpName = document.getElementById("signupName");
let signUpEmail = document.getElementById("signupEmail");
let signUpPass = document.getElementById("signupPass");
let signUpButton = document.getElementById("signupBtn");
let success = document.getElementById("success");
let emailVali = document.getElementById("emailvali");
let allRequired = document.getElementById("less");
let emailExist = document.getElementById("emailExist");
let userExist = document.getElementById("userExist");
let userNames = [];
let users;
if (localStorage.getItem("user") != null) {
  users = JSON.parse(localStorage.getItem("user"));
} else {
  users = [];
}

signUpButton.addEventListener("click", function () {
  let userInfo = {
    userName: signUpName.value,
    userEmail: signUpEmail.value,
    userPass: signUpPass.value,
  };
  if (inputsRequired()) {
    if (validation()) {
      if (isEmailExist() && isNameExist()) {
        users.push(userInfo);
        localStorage.setItem("user", JSON.stringify(users));
        clear();
        open("../html/login/index.html");
        // signUpButton.setAttribute("href", "");
      }
    }
  }
});

function clear() {
  signUpName.value = "";
  signUpEmail.value = "";
  signUpPass.value = "";
}

function validation() {
  const regix = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regix.test(signUpEmail.value.trim())) {
    signUpEmail.classList.replace("is-invalid", "is-valid");
    success.classList.replace("d-none", "d-block");
    emailVali.classList.replace("d-block", "d-none");

    return true;
  } else {
    success.classList.replace("d-block", "d-none");
    signUpEmail.classList.add("is-valid", "is-invalid");
    emailVali.classList.replace("d-none", "d-block");
    return false;
  }
}
function inputsRequired() {
  if (
    signUpName.value == "" ||
    signUpEmail.value == "" ||
    signUpPass.value == ""
  ) {
    allRequired.classList.replace("d-none", "d-block");
    return false;
  } else {
    allRequired.classList.replace("d-block", "d-none");
    return true;
  }
}
function isNameExist() {
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].userName.toLowerCase().trim() ==
      signUpName.value.toLowerCase().trim()
    ) {
      alert("this name is exist");
      return false;
    }
  }
  return true;
}
function isEmailExist() {
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].userEmail.toLowerCase().trim() ==
      signUpEmail.value.toLowerCase().trim()
    ) {
      alert("this Email is exist");

      return false;
    }
  }
  return true;
}
