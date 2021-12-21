import button from "./button.js";
import userInfo from "./userInfo.js";

window.onload = async function () {
  userInfo();
  button("add-village-btn", "./newVillage.html");
  button("login-btn", "./login.html");
  let connectedUser = localStorage.getItem("username");
  let beforeLoginContainer = document.getElementById("before-login-container");
  let afterLoginContainer = document.getElementById("after-login-container");
  let htmlString = "";
  let villagesShowingContainer = document.getElementById(
    "villages-showing-container"
  );

  if (connectedUser == undefined) {
    beforeLoginContainer.style.display = "flex";
    afterLoginContainer.style.display = "none";
    return;
  }

  beforeLoginContainer.style.display = "none";
  afterLoginContainer.style.display = "flex";

  let promise = await fetch(
    `https://village-simulator.herokuapp.com/villages?username=${connectedUser.toLowerCase()}`
  );
  let data = await promise.json();
  data.forEach((village) => {
    console.log(village);
    htmlString += `
    <div id="${village._id}" class="village-btn">
    <section><p>${village.villageName}</p></section>
      <p title="Villagers">${
        Object.keys(village.villagers).length
      }<span class="material-icons">groups</span></p>
      <p title="Furniture">${
        Object.keys(village.furniture).length
      }<span class="material-icons">chair</span></p>
      <p title="Wall Furniture">${
        Object.keys(village.wallFurniture).length
      }<span class="material-icons">filter_frames</span></p>
    </div>
    `;
  });
  villagesShowingContainer.innerHTML = htmlString;

  let villageBtns = document.querySelectorAll(".village-btn");
  villageBtns.forEach((villageBtn) => {
    villageBtn.addEventListener("click", (e) => {
      e.preventDefault();
      sessionStorage.setItem("villageID", villageBtn.id);
      window.location.assign("./myVillage.html");
    });
  });
};
