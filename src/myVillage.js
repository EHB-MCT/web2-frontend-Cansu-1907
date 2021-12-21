import userInfo from "./userInfo.js";
import loopObjAndInsertHtml from "./loopObjAndInsertHtml.js";

window.onload = async function () {
  userInfo();
  let villageID = sessionStorage.getItem("villageID");
  let villageName = document.getElementById("my-village-name");
  let villagersContainer = document.getElementById("my-villagers-container");
  let furnitureContainer = document.getElementById("my-furniture-container");
  let wallContainer = document.getElementById("my-wall-container");
  let fishesContainer = document.getElementById("my-fishes-container");
  let bugsContainer = document.getElementById("my-bugs-container");
  let seaContainer = document.getElementById("my-sea-container");
  let fossilsContainer = document.getElementById("my-fossils-container");
  let deleteBtn = document.getElementById("delete-btn");
  let editBtn = document.getElementById("edit-btn");

  let promise = await fetch(
    `https://village-simulator.herokuapp.com/villages/${villageID}`
  );
  let data = await promise.json();

  villageName.innerText = data.villageName;
  loopObjAndInsertHtml(data.villagers, villagersContainer);
  loopObjAndInsertHtml(data.furniture, furnitureContainer);
  loopObjAndInsertHtml(data.wallFurniture, wallContainer);
  loopObjAndInsertHtml(data.fishes, fishesContainer);
  loopObjAndInsertHtml(data.bugs, bugsContainer);
  loopObjAndInsertHtml(data.sea, seaContainer);
  loopObjAndInsertHtml(data.fossils, fossilsContainer);

  deleteBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    let deleteTrue = confirm("Do you really wanna delete this village?");
    if (deleteTrue) {
      await fetch(
        `https://village-simulator.herokuapp.com/villages/${villageID}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      ).then((res) => {
        console.log("Request complete! response:", res);
      });

      window.location.assign("./villages.html");
    } else {
      return;
    }
  });

  editBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    let newVillageName = prompt("Choose a new name for this village:");

    await fetch(
      `https://village-simulator.herokuapp.com/villages/${villageID}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          newVillageName: newVillageName,
        }),
      }
    ).then((res) => {
      console.log("Request complete! response:", res);
    });

    window.location.reload();
  });
};
