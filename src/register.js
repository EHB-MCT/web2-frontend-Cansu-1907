import carousel from "./carousel.js";
import User from "./User.js";
import userInfo from "./userInfo.js";
import usersList from "./usersList.js";

window.onload = async function () {
  carousel();
  userInfo();
  let form = document.getElementById("register-form");
  let username = document.getElementById("username");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let existingUsers = await usersList();

  // After pressing on 'Create account' it first checks if the username exists
  // if username exists -> alert: this username is already taken
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    // When someone wants to create an account -> the username MUST be unique
    if (existingUsers.includes(username.value.toLowerCase())) {
      alert(`The username: ${username.value} is already taken`);
    } else {
      const newUser = new User(
        username.value.toLowerCase(),
        email.value,
        password.value
      );

      await fetch("https://village-simulator.herokuapp.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      }).then((res) => {
        console.log("Request complete! response:", res);
      });
      alert(
        `Account with the username: ${username.value.toLowerCase()} has been created`
      );
      window.location.assign("./login.html");
    }
  });
};
