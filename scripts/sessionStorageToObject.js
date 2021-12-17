import getData from "./getData.js";

// This function is used to convert id from the session storage to data
// The data is stored in a object and it's returned when calling this function

// parameters:
// itemName -> villager, furniture, wall-furniture, fish, bugs, sea, fossils
// amount   -> amount of items
//          -> amount = 5 for villager, furniture & wall-furniture
//          -> amount = 6 for fish, bugs, sea, fossils

export default async function sessionStorageToObject(itemName, amount) {
  let obj = {};

  // Populates the empty object 'obj' with the id's from the session storage
  for (let i = 0; i <= amount; i++) {
    if (sessionStorage.getItem(`${itemName}${i}`)) {
      obj[`${itemName}${i}`] = sessionStorage.getItem(`${itemName}${i}`);
    }
  }

  // Convert the id's from 'obj' to data with the help of the 'getData' function
  for (let a in obj) {
    // This if statement checks the name of the item -> Some items have different url
    if (itemName == "furniture" || itemName == "wall-furniture") {
      obj[a] = `https://acnhapi.com/v1/images/furniture/${obj[a]}`;
    } else if (itemName == "villager") {
      let data = await getData(`http://acnhapi.com/v1/${itemName}s/${obj[a]}`);
      obj[a] = data;
    } else {
      let data = await getData(`http://acnhapi.com/v1/${itemName}/${obj[a]}`);
      obj[a] = data;
    }
  }
  return obj;
}
