export default function loopObjAndInsertHtml(data, container) {
  // console.log(data);
  let htmlString = "";
  if (
    "villager1" in data ||
    "villager2" in data ||
    "villager3" in data ||
    "villager4" in data ||
    "villager5" in data
  ) {
    for (let item in data) {
      htmlString += `
        <div class="shadow"><img class="villager-img" src="${data[item]["image_uri"]}" title="${data[item].name["name-USen"]}"></div>
        `;
      container.innerHTML = htmlString;
    }
    container.innerHTML = htmlString;
  } else if (
    "furniture1" in data ||
    "furniture2" in data ||
    "furniture3" in data ||
    "furniture4" in data ||
    "furniture5" in data ||
    "wall-furniture1" in data ||
    "wall-furniture2" in data ||
    "wall-furniture3" in data ||
    "wall-furniture4" in data ||
    "wall-furniture5" in data
  ) {
    for (let item in data) {
      htmlString += `
        <div class="shadow"><img src="${data[item]}"}"></div>
        `;
    }
  } else if ("fish1" in data || "bugs1" in data || "sea1" in data) {
    for (let item in data) {
      htmlString += `
        <div class="shadow"><img src="${data[item]["icon_uri"]}" title="${data[item].name["name-USen"]}"}></div>
        `;
    }
  } else if ("fossils1" in data) {
    for (let item in data) {
      htmlString += `
        <div class="shadow"><img src="${data[item]["image_uri"]}" title="${data[item].name["name-USen"]}"}></div>
        `;
    }
  }

  container.innerHTML = htmlString;
}
