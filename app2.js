let form2 = document.getElementById("form2");
let email = document.getElementById("email");
let password = document.getElementById("password");
form2.addEventListener("submit", (e) => {
  e.preventDefault();
  let registeredUser = JSON.parse(localStorage.getItem("user"));
  if (
    password.value === registeredUser.userPassword &&
    email.value === registeredUser.userEmail
  ) {
    console.log("nice");
  } else {
    console.log("no");
  }
});
