const containerLoginForm = document.querySelector(".container-login-form");
const containersignupForm = document.querySelector(".container-signup-form");

const submitBtn = document.querySelector(".submit-btn");
const alertMessage = document.querySelector(".alert-message");

const loginForm = document.querySelector(".login-form");
const signForm = document.querySelector(".sign-form");
const dloginForm = document.querySelector(".click");
const userList = document.querySelector(".userList");
const table = document.querySelector("table");
let userData = [
  {
    name: "Email",
    email: "name@gmail.com",
    password: "Password",
  },
  {
    name: "Akmal",
    email: "akmal@gmail.com",
    password: "salom",
  },
];

const displayUser = function (data) {
  table.innerHTML = "";
  data.map((user, id, arr) => {
    const tableRow = document.createElement("tr");
    const usernameTd = document.createElement("td");
    const emailTd = document.createElement("td");
    const passwordTd = document.createElement("td");
    const userId = document.createElement("td");
    userId.innerText = id + 1;
    usernameTd.innerText = user.name;
    emailTd.innerText = user.email;
    passwordTd.innerText= user.password;

    tableRow.appendChild(userId);
    tableRow.appendChild(usernameTd);
    tableRow.appendChild(emailTd);
    tableRow.appendChild(passwordTd);
    table.appendChild(tableRow);

    userList.appendChild(table);
  });
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputName = e.target[0].value;
  const inputEmail = e.target[1].value;
  const inputPassword = e.target[2].value;

  const check = userData.find(
    (user) =>
      user.name === inputName &&
      user.email === inputEmail &&
      user.password === inputPassword
  );
  console.log(check);

  if (check) {
    alertMessage.textContent = "You Succesfully Login";
    displayUser(userData);
    loginForm.reset();
  } else {
    alertMessage.textContent = "Your some of input is wrong";
    loginForm.reset();
  }
});

signForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputName = e.target[0].value;
  const inputEmail = e.target[1].value;
  const inputPassword = e.target[2].value;

  const check = userData.find(
    (user) =>
      user.name === inputName &&
      user.email === inputEmail &&
      user.password === inputPassword
  );

  if (check) {
    alert("this account already exist");
    console.log("this account already exist");
    signForm.reset();
  } else {
    userData.push({
      name: inputName,
      email: inputEmail,
      password: inputPassword,
    });
    alertMessage.textContent = "You Succesfully sign up";
    console.log("You Succesfully sign up");

    displayUser(userData);
    signForm.reset();
  }

  console.log(userData);
});

dloginForm.addEventListener("click", () => {
  containerLoginForm.classList.toggle("hidden");
  containersignupForm.classList.toggle("hidden");
  alertMessage.textContent = "";
});

/* 
let state = false;



loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputName = e.target[0];
  const inputEmail = e.target[1];
  const inputPassword = e.target[2];



console.log(check );

  if (checkUser) {
    // state = true;
    console.log('Yes');
  } else {
    alert("You succesfully Login");
  }
  state
    ? setTimeout(() => {
        console.log("dsfdfs");
        containerLoginForm.style.display = "none";
        containersignupForm.style.display = "block";
      }, 1000)
    : "";
  console.log(userData);
});

signForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputName = e.target[0];
  const inputEmail = e.target[1];
  const inputPassword = e.target[2];
  if (userData.includes(inputEmail.value)) {
    state = true;
    console.log("This Email already exists");
    containerLoginForm.style.display = "block";
    containersignupForm.style.display = "none";
  } else {
    userData.push({
      name: inputName.value,
      email: inputEmail.value,
      password: inputPassword.value,
    });
  }

  state
    ? setTimeout(() => {
        console.log("dsfdfs");
        containerLoginForm.style.display = "none";
        containersignupForm.style.display = "block";
      }, 1000)
    : "";
  console.log(userData);
});


 */
