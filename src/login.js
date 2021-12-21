import carousel from "./carousel.js";
import userInfo from "./userInfo.js";
import usersList from "./usersList.js";

window.onload = async function () {
  carousel();
  userInfo();
  let loginContainer = document.getElementById("login-container");
  let loggedInContainer = document.getElementById("logged-in-container");
  let form = document.getElementById("login-form");
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let existingUsers = await usersList();
  let connectedUser = localStorage.getItem("username");

  if (connectedUser == undefined) {
    loginContainer.style.display = "flex";
    loggedInContainer.style.display = "none";
  } else {
    loginContainer.style.display = "none";
    loggedInContainer.style.display = "flex";

    let htmlString = `
    <h1>Hi ${connectedUser}</h1>
    <p>If you wanna <b>log out</b> press the button down.</p>
    <button id="log-out">Log Out</button>
    `;

    loggedInContainer.innerHTML = htmlString;

    let logOutBtn = document.getElementById("log-out");

    logOutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("username");
      window.location.reload();
    });
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (existingUsers.includes(username.value.toLowerCase())) {
      let promise = await fetch(
        `https://village-simulator.herokuapp.com/users?username=${username.value.toLowerCase()}`
      );
      let userData = await promise.json();

      if (password.value == userData[0].password) {
        localStorage.setItem("username", username.value.toLowerCase());
        window.location.reload();
      } else {
        alert("Incorrect password!");
      }
    } else {
      alert("This username doesn't exist");
    }
  });
};
