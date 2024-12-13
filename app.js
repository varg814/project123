let firstNameInput = document.getElementById("name");
let lastNameInput = document.getElementById("last");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("pass");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  let regexEmail =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  if (
    regexPass.test(passwordInput.value) &&
    regexEmail.test(emailInput.value) &&
    firstNameInput.value != "" &&
    lastNameInput.value != ""
  ) {
    let user = {
      userEmail: emailInput.value,
      userPassword: passwordInput.value,
    };
    localStorage.setItem("user", JSON.stringify(user));
    window.open("index2.html");
  } else {
    alert("change password or email");
  }

  if (firstNameInput.value === "") {
    firstNameInput.value = "";
    firstNameInput.style.backgroundImage = "url(./imgs/error.png)";
    firstNameInput.style.backgroundRepeat = "no-repeat";
    firstNameInput.style.backgroundPositionX = "calc(95%)";
    firstNameInput.style.backgroundPositionY = "calc(50%)";
    firstNameInput.style.outline = "1px solid red";
  } else {
    firstNameInput.style.backgroundImage = "none";
    firstNameInput.style.outline = "none";
  }

  if (lastNameInput.value === "") {
    lastNameInput.value = "";
    lastNameInput.style.backgroundImage = "url(./imgs/error.png)";
    lastNameInput.style.backgroundRepeat = "no-repeat";
    lastNameInput.style.backgroundPositionX = "calc(95%)";
    lastNameInput.style.backgroundPositionY = "calc(50%)";
    lastNameInput.style.outline = "1px solid red";
  } else {
    lastNameInput.style.backgroundImage = "none";
    lastNameInput.style.outline = "none";
  }

  if (emailInput.value === "") {
    emailInput.value = "";
    emailInput.style.backgroundImage = "url(./imgs/error.png)";
    emailInput.style.backgroundRepeat = "no-repeat";
    emailInput.style.backgroundPositionX = "calc(95%)";
    emailInput.style.backgroundPositionY = "calc(50%)";
    emailInput.style.outline = "1px solid red";
  } else {
    emailInput.style.backgroundImage = "none";
    emailInput.style.outline = "none";
  }

  if (passwordInput.value === "") {
    passwordInput.value = "";
    passwordInput.style.backgroundImage = "url(./imgs/error.png)";
    passwordInput.style.backgroundRepeat = "no-repeat";
    passwordInput.style.backgroundPositionX = "calc(95%)";
    passwordInput.style.backgroundPositionY = "calc(50%)";
    passwordInput.style.placeholder = "";
    passwordInput.style.outline = "1px solid red";
  } else {
    passwordInput.style.backgroundImage = "none";
    passwordInput.style.outline = "none";
  }
});
