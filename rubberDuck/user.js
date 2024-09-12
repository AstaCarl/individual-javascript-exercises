const form = document.getElementById("form");

// event listener for the form to handle submit
form.addEventListener("submit", (event) => {
  const newPassword = document.getElementById("password").value;
  const newUser = document.getElementById("username").value;
  const newEmail = document.getElementById("email").value;

  // conditions for the forminputs
  const emailCondition =
    newEmail.length < 16 || !newEmail.includes("@cphbusiness.dk");
  const passwordCondition = newPassword.length < 8;
  const usernameCondition = newUser.length < 4 || newUser.length > 30;

  // if any of the conditions arent met, prevent the form from submitting
  if (emailCondition) {
    alert("Invalid email, it must be a cphbusiness email");
    event.preventDefault();
    return;
  }
  if (usernameCondition) {
    if (newUser.length < 4) {
      alert("Username must be at least 4 characters long");
    } else {
      alert("Username must be under 15 characters long");
    }
    event.preventDefault();
    return;
  }
  if (passwordCondition) {
    alert("Password must be at least 8 characters long");
    event.preventDefault();
    return;
  }
  // if all conditions are met, alert the user that the form was submitted successfully
  alert("Form submitted successfully!");

  // save the username to localstorage
  const user = JSON.parse(localStorage.getItem("user")) || {};
  user.username = newUser;
  localStorage.setItem("user", JSON.stringify(user));
  console.log(user);
});
