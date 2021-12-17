import getData from "./getData.js";

// This function is used to catch a random fish, bug, sea and to find a random fossil
export default async function catchItem(itemName) {
  // We fetch the url with the right parameter -> fish, bugs, sea or fossils
  let data = await getData(`http://acnhapi.com/v1/${itemName}/`);
  let btn = document.getElementById(itemName);
  // This counter variable is used to prevent catching more than 6 items (fishes, bugs, sea creatures or fossils)
  let counter = 1;

  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    let myArray = [];

    // Loop over the data and push every single item into the 'myArray' array
    for (let item in data) {
      myArray.push(data[item]);
    }

    // This if statement looks if the counter is less or equal to 6
    // If its less or equal to 6  -> executes code
    // Else  -> there is a popup that notifies the user that the limit of items to catch is reached
    if (counter <= 6) {
      let randomItem = myArray[Math.floor(Math.random() * myArray.length)];
      let container = document.getElementById(`${itemName}${counter}`);

      // This if statement handles the logic for setting the items in the session storage
      // During the creation of a village the stored data in the session storage is mandatory
      if (itemName == "fossils") {
        sessionStorage.setItem(
          `${itemName}${counter}`,
          randomItem["file-name"]
        );
      } else {
        sessionStorage.setItem(`${itemName}${counter}`, randomItem.id);
      }

      // The object for the fossils doesn't have 'icon_uri'
      // This if statement fixes that issue
      if (randomItem["icon_uri"] != undefined) {
        container.innerHTML = `<img class="items-img" src="${randomItem["icon_uri"]}" title="${randomItem.name["name-EUen"]}">`;
      } else {
        container.innerHTML = `<img class="items-img" src="${randomItem["image_uri"]}" title="${randomItem.name["name-EUen"]}">`;
      }
    } else {
      alert(`Limit of ${itemName} reached`);
    }
    // Incrementing the counter every time the click function is triggered
    counter++;
  });
}
