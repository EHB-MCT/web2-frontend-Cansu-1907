export default function userInfo() {
  let userInfoContainer = document.getElementById("user-info");
  let connectedUser = localStorage.getItem("username");

  if (connectedUser == undefined) {
    userInfoContainer.style.display = "none";
  } else {
    let htmlString = `
      <p>You are logged in as: <b>${connectedUser}</b></p>
      <figure>
          <img src="./images/profile.png" alt="">
      </figure>
      `;
    userInfoContainer.innerHTML = htmlString;
    userInfoContainer.style.display = "flex";
  }
}
