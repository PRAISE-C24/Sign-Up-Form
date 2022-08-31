//input container boxes

const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const box3 = document.querySelector(".box-3");
const box4 = document.querySelector(".box-4");

//form input field

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btn = document.querySelector("button");

//Error display boxes
const fNameErr = document.querySelector("#fNameErr");
const lNameErr = document.querySelector("#lNameErr");
const emailErr = document.querySelector("#emailErr");
const passErr = document.querySelector("#passErr");

//Error icon
const icon1 = document.querySelector(".icon-1");
const icon2 = document.querySelector(".icon-2");
const icon3 = document.querySelector(".icon-3");
const icon4 = document.querySelector(".icon-4");

//button click to verify inputs

btn.addEventListener("click", (e) => {
  verifyFirstName(firstName.value);
  verifyLastName(lastName.value);
  verifyEmail(email.value);
  verifyPassword(password.value);
  e.preventDefault();
});

//first name verification function

function verifyFirstName(val) {
  const fName = val.toLowerCase();
  const nameRegex = /[a-z]+/g;

  if (fName.length === 0) {
    trowError(`FirstName can not be empty!`);
  } else if (fName.length < 3) {
    trowError(`FirstName can not be less than 3 letters!`);
  } else if (fName.length > 12) {
    trowError(`FirstName is too long!`);
  } else if (!nameRegex.test(fName)) {
    trowError(`FirstName must contain A-Z only!`);
  } else {
    trowError("");
  }
}

//last name verification function

function verifyLastName(val) {
  const lName = val.toLowerCase();
  const nameRegex = /[a-z]+/g;

  if (lName.length === 0) {
    trowError(`LastName can not be empty!`);
  } else if (lName.length < 3) {
    trowError(`LastName can not be less than 3 letters!`);
  } else if (lName.length > 12) {
    trowError(`LastName is too long!`);
  } else if (!nameRegex.test(lName)) {
    trowError(`LastName must contain A-Z only!`);
  } else {
    trowError("");
  }
}

//email verification function

function verifyEmail(val) {
  const email = val.toLowerCase();
  const emailRegex = /^[a-z]+\d+\@[a-z]+\.[a-z]{3}/gm;

  if (email.length === 0) {
    trowError(`email can not be empty!`);
  } else if (!emailRegex.test(email)) {
    trowError(`it's like this is not a valid email`);
  } else {
    trowError("");
  }
}

//password verification function

function verifyPassword(val) {
  const password = val;

  if (password.length === 0) {
    trowError(`password can not be empty!`);
  } else if (password.length < 6) {
    trowError(`password can not be less than 6 characters!`);
  } else if (password.length > 12) {
    trowError(`password is too long!`);
  } else {
    trowError("");
  }
}

//Error Msg
function trowError(error) {
  if (error !== "") {
    if (error[0] === "F") {
      fNameErr.textContent = error;
      icon1.style.display = "block";
      box1.style.border = "2px solid hsl(0, 100%, 74%)";
    } else if (error[0] === "L") {
      lNameErr.textContent = error;
      icon2.style.display = "block";
      box2.style.border = "2px solid hsl(0, 100%, 74%)";
    } else if (error[0] === "p") {
      passErr.textContent = error;
      icon4.style.display = "block";
      box4.style.border = "2px solid hsl(0, 100%, 74%)";
    } else {
      emailErr.textContent = error;
      icon3.style.display = "block";
      box3.style.border = "2px solid hsl(0, 100%, 74%)";
    }
  }
}

//focus input and clear error Msg
firstName.addEventListener("click", () => {
  icon1.style.display = "none";
  box1.style.border = "1px solid hsl(246, 25%, 77%)";
  fNameErr.textContent = "";
});

lastName.addEventListener("click", () => {
  icon2.style.display = "none";
  box2.style.border = "1px solid hsl(246, 25%, 77%)";
  lNameErr.textContent = "";
});

email.addEventListener("click", () => {
  icon3.style.display = "none";
  box3.style.border = "1px solid hsl(246, 25%, 77%)";
  emailErr.textContent = "";
});

password.addEventListener("click", () => {
  icon4.style.display = "none";
  box4.style.border = "1px solid hsl(246, 25%, 77%)";
  passErr.textContent = "";
});
