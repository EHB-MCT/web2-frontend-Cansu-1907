import getData from "./getData.js";

// this function needs the name of the item that has to be fetched
// and the name of the container. The container will contain the data as img tags
export default async function dataInHtml(itemName, containerName) {
  let data = await getData(`http://acnhapi.com/v1/${itemName}`);
  let htmlString = "";

  // The 'houseware' & 'wallmounted' -> items have a different api structure than 'villagers'
  // 'houseware' & 'wallmounted'     -> {main object} {air_conditioner} [ {variant} {variant} {variant} {variant} {variant} ]
  // 'villagers'                     -> {main object} {ant00}
  if (itemName == "villagers") {
    for (let item in data) {
      htmlString += `
        <img id="${data[item].id}" class="items-img" src="${data[item].image_uri}" title="${data[item].name["name-EUen"]}">
        `;
    }
  } else if (itemName == "houseware" || itemName == "wallmounted") {
    for (let item in data) {
      for (let a in data[item]) {
        htmlString += `
          <img id="${data[item][a]["file-name"]}" class="items-img" src="${data[item][a].image_uri}" title="${data[item][a].name["name-EUen"]}">
          `;
      }
    }
  }

  containerName.innerHTML = htmlString;
}
