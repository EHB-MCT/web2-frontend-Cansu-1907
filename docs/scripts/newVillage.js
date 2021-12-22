/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Village.js":
/*!************************!*\
  !*** ./src/Village.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Village)\n/* harmony export */ });\nclass Village {\r\n  constructor(\r\n    villageName,\r\n    villagers,\r\n    furniture,\r\n    wallFurniture,\r\n    fishes,\r\n    bugs,\r\n    sea,\r\n    fossils,\r\n    username\r\n  ) {\r\n    this.villageName = villageName;\r\n    this.villagers = villagers;\r\n    this.furniture = furniture;\r\n    this.wallFurniture = wallFurniture;\r\n    this.fishes = fishes;\r\n    this.bugs = bugs;\r\n    this.sea = sea;\r\n    this.fossils = fossils;\r\n    this.username = username;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://web2-frontend-cansu-1907/./src/Village.js?");

/***/ }),

/***/ "./src/catch.js":
/*!**********************!*\
  !*** ./src/catch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ catchItem)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/getData.js\");\n\r\n\r\n// This function is used to catch a random fish, bug, sea and to find a random fossil\r\nasync function catchItem(itemName) {\r\n  // We fetch the url with the right parameter -> fish, bugs, sea or fossils\r\n  let data = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`https://acnhapi.com/v1/${itemName}/`);\r\n  let btn = document.getElementById(itemName);\r\n  // This counter variable is used to prevent catching more than 6 items (fishes, bugs, sea creatures or fossils)\r\n  let counter = 1;\r\n\r\n  btn.addEventListener(\"click\", async (e) => {\r\n    e.preventDefault();\r\n    let myArray = [];\r\n\r\n    // Loop over the data and push every single item into the 'myArray' array\r\n    for (let item in data) {\r\n      myArray.push(data[item]);\r\n    }\r\n\r\n    // This if statement looks if the counter is less or equal to 6\r\n    // If its less or equal to 6  -> executes code\r\n    // Else  -> there is a popup that notifies the user that the limit of items to catch is reached\r\n    if (counter <= 6) {\r\n      let randomItem = myArray[Math.floor(Math.random() * myArray.length)];\r\n      let container = document.getElementById(`${itemName}${counter}`);\r\n\r\n      // This if statement handles the logic for setting the items in the session storage\r\n      // During the creation of a village the stored data in the session storage is mandatory\r\n      if (itemName == \"fossils\") {\r\n        sessionStorage.setItem(\r\n          `${itemName}${counter}`,\r\n          randomItem[\"file-name\"]\r\n        );\r\n      } else {\r\n        sessionStorage.setItem(`${itemName}${counter}`, randomItem.id);\r\n      }\r\n\r\n      // The object for the fossils doesn't have 'icon_uri'\r\n      // This if statement fixes that issue\r\n      if (randomItem[\"icon_uri\"] != undefined) {\r\n        container.innerHTML = `<img class=\"items-img\" src=\"${randomItem[\"icon_uri\"]}\" title=\"${randomItem.name[\"name-EUen\"]}\">`;\r\n      } else {\r\n        container.innerHTML = `<img class=\"items-img\" src=\"${randomItem[\"image_uri\"]}\" title=\"${randomItem.name[\"name-EUen\"]}\">`;\r\n      }\r\n    } else {\r\n      alert(`Limit of ${itemName} reached`);\r\n    }\r\n    // Incrementing the counter every time the click function is triggered\r\n    counter++;\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://web2-frontend-cansu-1907/./src/catch.js?");

/***/ }),

/***/ "./src/dataInHtml.js":
/*!***************************!*\
  !*** ./src/dataInHtml.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dataInHtml)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/getData.js\");\n\r\n\r\n// this function needs the name of the item that has to be fetched\r\n// and the name of the container. The container will contain the data as img tags\r\nasync function dataInHtml(itemName, containerName) {\r\n  let data = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`https://acnhapi.com/v1/${itemName}`);\r\n  let htmlString = \"\";\r\n\r\n  // The 'houseware' & 'wallmounted' -> items have a different api structure than 'villagers'\r\n  // 'houseware' & 'wallmounted'     -> {main object} {air_conditioner} [ {variant} {variant} {variant} {variant} {variant} ]\r\n  // 'villagers'                     -> {main object} {ant00}\r\n  if (itemName == \"villagers\") {\r\n    for (let item in data) {\r\n      htmlString += `\r\n        <img id=\"${data[item].id}\" class=\"items-img\" src=\"${data[item].image_uri}\" title=\"${data[item].name[\"name-EUen\"]}\">\r\n        `;\r\n    }\r\n  } else if (itemName == \"houseware\" || itemName == \"wallmounted\") {\r\n    for (let item in data) {\r\n      for (let a in data[item]) {\r\n        htmlString += `\r\n          <img id=\"${data[item][a][\"file-name\"]}\" class=\"items-img\" src=\"${data[item][a].image_uri}\" title=\"${data[item][a].name[\"name-EUen\"]}\">\r\n          `;\r\n      }\r\n    }\r\n  }\r\n\r\n  containerName.innerHTML = htmlString;\r\n}\r\n\n\n//# sourceURL=webpack://web2-frontend-cansu-1907/./src/dataInHtml.js?");

/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getData)\n/* harmony export */ });\n// This function needs an url as argument\r\n// This function returns data as an object with the fetched url\r\nasync function getData(url) {\r\n  let resp = await fetch(url);\r\n  let data = resp.json();\r\n  return data;\r\n}\r\n\n\n//# sourceURL=webpack://web2-frontend-cansu-1907/./src/getData.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ modal)\n/* harmony export */ });\n// https://www.w3schools.com/howto/howto_css_modals.asp\r\n\r\n// This function contains the logic for the modal\r\nfunction modal(itemName, btnName) {\r\n  let addBtnList = document.querySelectorAll(`.${btnName}`);\r\n  let modalContainer = document.getElementById(`${itemName}Modal`);\r\n\r\n  // Open the modal after clicking on one of the buttons\r\n  addBtnList.forEach((btn) => {\r\n    btn.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n\r\n      // The code executes only if its empty\r\n      if (btn.children.length == 0) {\r\n        if (e.target.id != null) {\r\n          sessionStorage.setItem(\"containerToAdd\", e.target.id);\r\n        }\r\n        if (e.target.classList.contains(itemName)) {\r\n          modalContainer.style.display = \"block\";\r\n        }\r\n      } else {\r\n        return;\r\n      }\r\n    });\r\n  });\r\n\r\n  // Close the modal after clicking somewhere in the modal container\r\n  modalContainer.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    modalContainer.style.display = \"none\";\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://web2-frontend-cansu-1907/./src/modal.js?");

/***/ }),

/***/ "./src/newVillage.js":
/*!***************************!*\
  !*** ./src/newVillage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ \"./src/modal.js\");\n/* harmony import */ var _Village_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Village.js */ \"./src/Village.js\");\n/* harmony import */ var _catch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catch.js */ \"./src/catch.js\");\n/* harmony import */ var _sessionStorageToObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sessionStorageToObject.js */ \"./src/sessionStorageToObject.js\");\n/* harmony import */ var _dataInHtml_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataInHtml.js */ \"./src/dataInHtml.js\");\n/* harmony import */ var _userInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userInfo.js */ \"./src/userInfo.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.onload = async function () {\r\n  (0,_userInfo_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n  let villagersContainer = document.getElementById(\"villagers-container\");\r\n  let furnitureContainer = document.getElementById(\"furniture-container\");\r\n  let wallFurnitureContainer = document.getElementById(\r\n    \"wall-furniture-container\"\r\n  );\r\n  let createBtn = document.getElementById(\"create-btn\");\r\n\r\n  (0,_catch_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"fish\");\r\n  (0,_catch_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"bugs\");\r\n  (0,_catch_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"sea\");\r\n  (0,_catch_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"fossils\");\r\n\r\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"villager\", \"add-btn\");\r\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"furniture\", \"add-btn\");\r\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"wall\", \"add-btn\");\r\n\r\n  await (0,_dataInHtml_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"villagers\", villagersContainer);\r\n  await (0,_dataInHtml_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"houseware\", furnitureContainer);\r\n  await (0,_dataInHtml_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"wallmounted\", wallFurnitureContainer);\r\n\r\n  let itemsImg = document.querySelectorAll(\".items-img\");\r\n\r\n  // This code makes sure that every images in 'itemsImg' are clickable and works properly\r\n  itemsImg.forEach((img) => {\r\n    img.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      let containerToAdd = sessionStorage.getItem(\"containerToAdd\");\r\n\r\n      if (containerToAdd != null) {\r\n        document.getElementById(containerToAdd).innerHTML = \"\";\r\n        document.getElementById(containerToAdd).appendChild(e.target);\r\n        document.getElementById(containerToAdd).style.backgroundImage = \"none\";\r\n        sessionStorage.setItem(containerToAdd, e.target.id);\r\n      }\r\n\r\n      sessionStorage.removeItem(\"containerToAdd\");\r\n    });\r\n  });\r\n\r\n  // This handles the logic for the 'create' button\r\n  createBtn.addEventListener(\"click\", async (e) => {\r\n    e.preventDefault();\r\n    let villageName = document.getElementById(\"village-name\");\r\n    let villagersObj = await (0,_sessionStorageToObject_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"villager\", 5);\r\n    let furnitureObj = await (0,_sessionStorageToObject_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"furniture\", 5);\r\n    let wallFurnitureObj = await (0,_sessionStorageToObject_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"wall-furniture\", 5);\r\n    let fishesObj = await (0,_sessionStorageToObject_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"fish\", 6);\r\n    let bugsObj = await (0,_sessionStorageToObject_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"bugs\", 6);\r\n    let seaObj = await (0,_sessionStorageToObject_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"sea\", 6);\r\n    let fossilsObj = await (0,_sessionStorageToObject_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"fossils\", 6);\r\n    let username = localStorage.getItem(\"username\");\r\n\r\n    console.log(villagersObj);\r\n\r\n    if (villageName.value === \"\") {\r\n      alert(\"Please choose a name for your village.\");\r\n      return;\r\n    } else if (\r\n      Object.keys(villagersObj).length === 0 ||\r\n      Object.keys(furnitureObj).length === 0 ||\r\n      Object.keys(wallFurnitureObj).length === 0 ||\r\n      Object.keys(fishesObj).length === 0 ||\r\n      Object.keys(bugsObj).length === 0 ||\r\n      Object.keys(seaObj).length === 0 ||\r\n      Object.keys(fossilsObj).length === 0\r\n    ) {\r\n      alert(\"Please select at least one item of each category.\");\r\n      return;\r\n    }\r\n\r\n    let village = new _Village_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n      villageName.value,\r\n      villagersObj,\r\n      furnitureObj,\r\n      wallFurnitureObj,\r\n      fishesObj,\r\n      bugsObj,\r\n      seaObj,\r\n      fossilsObj,\r\n      username\r\n    );\r\n\r\n    await fetch(\"https://village-simulator.herokuapp.com/villages\", {\r\n      method: \"POST\",\r\n      headers: { \"Content-Type\": \"application/json\" },\r\n      body: JSON.stringify(village),\r\n    }).then((res) => {\r\n      console.log(\"Request complete! response:\", res);\r\n    });\r\n\r\n    alert(`The: \"${villageName.value}\" village has been created`);\r\n    // After pressing the button -> the session storage is cleared\r\n    sessionStorage.clear();\r\n    window.location.assign(\"./villages.html\");\r\n  });\r\n};\r\n\r\n// After reloading the page -> the session storage is cleared\r\nwindow.onunload = function () {\r\n  sessionStorage.clear();\r\n};\r\n\n\n//# sourceURL=webpack://web2-frontend-cansu-1907/./src/newVillage.js?");

/***/ }),

/***/ "./src/sessionStorageToObject.js":
/*!***************************************!*\
  !*** ./src/sessionStorageToObject.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sessionStorageToObject)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/getData.js\");\n\r\n\r\n// This function is used to convert id from the session storage to data\r\n// The data is stored in a object and it's returned when calling this function\r\n\r\n// parameters:\r\n// itemName -> villager, furniture, wall-furniture, fish, bugs, sea, fossils\r\n// amount   -> amount of items\r\n//          -> amount = 5 for villager, furniture & wall-furniture\r\n//          -> amount = 6 for fish, bugs, sea, fossils\r\n\r\nasync function sessionStorageToObject(itemName, amount) {\r\n  let obj = {};\r\n\r\n  // Populates the empty object 'obj' with the id's from the session storage\r\n  for (let i = 0; i <= amount; i++) {\r\n    if (sessionStorage.getItem(`${itemName}${i}`)) {\r\n      obj[`${itemName}${i}`] = sessionStorage.getItem(`${itemName}${i}`);\r\n    }\r\n  }\r\n\r\n  // Convert the id's from 'obj' to data with the help of the 'getData' function\r\n  for (let a in obj) {\r\n    // This if statement checks the name of the item -> Some items have different url\r\n    if (itemName == \"furniture\" || itemName == \"wall-furniture\") {\r\n      obj[a] = `https://acnhapi.com/v1/images/furniture/${obj[a]}`;\r\n    } else if (itemName == \"villager\") {\r\n      let data = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`https://acnhapi.com/v1/${itemName}s/${obj[a]}`);\r\n      obj[a] = data;\r\n    } else {\r\n      let data = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`https://acnhapi.com/v1/${itemName}/${obj[a]}`);\r\n      obj[a] = data;\r\n    }\r\n  }\r\n  return obj;\r\n}\r\n\n\n//# sourceURL=webpack://web2-frontend-cansu-1907/./src/sessionStorageToObject.js?");

/***/ }),

/***/ "./src/userInfo.js":
/*!*************************!*\
  !*** ./src/userInfo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ userInfo)\n/* harmony export */ });\nfunction userInfo() {\r\n  let userInfoContainer = document.getElementById(\"user-info\");\r\n  let connectedUser = localStorage.getItem(\"username\");\r\n\r\n  if (connectedUser == undefined) {\r\n    userInfoContainer.style.display = \"none\";\r\n  } else {\r\n    let htmlString = `\r\n      <p>You are logged in as: <b>${connectedUser}</b></p>\r\n      <figure>\r\n          <img src=\"./images/profile.png\" alt=\"\">\r\n      </figure>\r\n      `;\r\n    userInfoContainer.innerHTML = htmlString;\r\n    userInfoContainer.style.display = \"flex\";\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://web2-frontend-cansu-1907/./src/userInfo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/newVillage.js");
/******/ 	
/******/ })()
;