import modal from "./modal.js";
import Village from "./Village.js";
import catchItem from "./catch.js";
import sessionStorageToObject from "./sessionStorageToObject.js";
import dataInHtml from "./dataInHtml.js";
import userInfo from "./userInfo.js";

window.onload = async function () {
  userInfo();
  let villagersContainer = document.getElementById("villagers-container");
  let furnitureContainer = document.getElementById("furniture-container");
  let wallFurnitureContainer = document.getElementById(
    "wall-furniture-container"
  );
  let createBtn = document.getElementById("create-btn");

  catchItem("fish");
  catchItem("bugs");
  catchItem("sea");
  catchItem("fossils");

  modal("villager", "add-btn");
  modal("furniture", "add-btn");
  modal("wall", "add-btn");

  await dataInHtml("villagers", villagersContainer);
  await dataInHtml("houseware", furnitureContainer);
  await dataInHtml("wallmounted", wallFurnitureContainer);

  let itemsImg = document.querySelectorAll(".items-img");

  // This code makes sure that every images in 'itemsImg' are clickable and works properly
  itemsImg.forEach((img) => {
    img.addEventListener("click", (e) => {
      e.preventDefault();
      let containerToAdd = sessionStorage.getItem("containerToAdd");

      if (containerToAdd != null) {
        document.getElementById(containerToAdd).innerHTML = "";
        document.getElementById(containerToAdd).appendChild(e.target);
        document.getElementById(containerToAdd).style.backgroundImage = "none";
        sessionStorage.setItem(containerToAdd, e.target.id);
      }

      sessionStorage.removeItem("containerToAdd");
    });
  });

  // This handles the logic for the 'create' button
  createBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    let villageName = document.getElementById("village-name");
    let villagersObj = await sessionStorageToObject("villager", 5);
    let furnitureObj = await sessionStorageToObject("furniture", 5);
    let wallFurnitureObj = await sessionStorageToObject("wall-furniture", 5);
    let fishesObj = await sessionStorageToObject("fish", 6);
    let bugsObj = await sessionStorageToObject("bugs", 6);
    let seaObj = await sessionStorageToObject("sea", 6);
    let fossilsObj = await sessionStorageToObject("fossils", 6);
    let username = localStorage.getItem("username");

    console.log(villagersObj);

    if (villageName.value === "") {
      alert("Please choose a name for your village.");
      return;
    } else if (
      Object.keys(villagersObj).length === 0 ||
      Object.keys(furnitureObj).length === 0 ||
      Object.keys(wallFurnitureObj).length === 0 ||
      Object.keys(fishesObj).length === 0 ||
      Object.keys(bugsObj).length === 0 ||
      Object.keys(seaObj).length === 0 ||
      Object.keys(fossilsObj).length === 0
    ) {
      alert("Please select at least one item of each category.");
      return;
    }

    let village = new Village(
      villageName.value,
      villagersObj,
      furnitureObj,
      wallFurnitureObj,
      fishesObj,
      bugsObj,
      seaObj,
      fossilsObj,
      username
    );

    await fetch("https://village-simulator.herokuapp.com/villages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(village),
    }).then((res) => {
      console.log("Request complete! response:", res);
    });

    alert(`The: "${villageName.value}" village has been created`);
    // After pressing the button -> the session storage is cleared
    sessionStorage.clear();
    window.location.assign("./villages.html");
  });
};

// After reloading the page -> the session storage is cleared
window.onunload = function () {
  sessionStorage.clear();
};
