// let nameUser = document.getElementById("nameUser");
if (localStorage.getItem("user") != null) {
  users = JSON.parse(localStorage.getItem("user"));
} else {
  users = [];
}
let index = localStorage.getItem("currentIndex");
// let nameOfUser=localStorage.getItem('userNameInput')
display();
function display() {
  let box = ` <h2 class="fs-1 text-white text-center">Welcome</h2>
   <p id="nameUser" class="text-white text-center fs-1">${users[index].userName}</p>`;
  document.getElementById("welcomeUser").innerHTML = box;
}
