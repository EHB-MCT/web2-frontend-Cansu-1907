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

/***/ "./src/loopObjAndInsertHtml.js":
/*!*************************************!*\
  !*** ./src/loopObjAndInsertHtml.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loopObjAndInsertHtml)\n/* harmony export */ });\nfunction loopObjAndInsertHtml(data, container) {\r\n  // console.log(data);\r\n  let htmlString = \"\";\r\n  if (\"villager1\" in data) {\r\n    for (let item in data) {\r\n      htmlString += `\r\n        <div class=\"shadow\"><img class=\"villager-img\" src=\"${data[item][\"image_uri\"]}\" title=\"${data[item].name[\"name-USen\"]}\"></div>\r\n        `;\r\n      container.innerHTML = htmlString;\r\n    }\r\n    container.innerHTML = htmlString;\r\n  } else if (\"furniture1\" in data || \"wall-furniture1\" in data) {\r\n    for (let item in data) {\r\n      htmlString += `\r\n        <div class=\"shadow\"><img src=\"${data[item]}\"}\"></div>\r\n        `;\r\n    }\r\n  } else if (\"fish1\" in data || \"bugs1\" in data || \"sea1\" in data) {\r\n    for (let item in data) {\r\n      htmlString += `\r\n        <div class=\"shadow\"><img src=\"${data[item][\"icon_uri\"]}\" title=\"${data[item].name[\"name-USen\"]}\"}></div>\r\n        `;\r\n    }\r\n  } else if (\"fossils1\" in data) {\r\n    for (let item in data) {\r\n      htmlString += `\r\n        <div class=\"shadow\"><img src=\"${data[item][\"image_uri\"]}\" title=\"${data[item].name[\"name-USen\"]}\"}></div>\r\n        `;\r\n    }\r\n  }\r\n\r\n  container.innerHTML = htmlString;\r\n}\r\n\n\n//# sourceURL=webpack://web2-frontend-cansu-1907/./src/loopObjAndInsertHtml.js?");

/***/ }),

/***/ "./src/myVillage.js":
/*!**************************!*\
  !*** ./src/myVillage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _userInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userInfo.js */ \"./src/userInfo.js\");\n/* harmony import */ var _loopObjAndInsertHtml_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loopObjAndInsertHtml.js */ \"./src/loopObjAndInsertHtml.js\");\n\r\n\r\n\r\nwindow.onload = async function () {\r\n  (0,_userInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  let villageID = sessionStorage.getItem(\"villageID\");\r\n  let villageName = document.getElementById(\"my-village-name\");\r\n  let villagersContainer = document.getElementById(\"my-villagers-container\");\r\n  let furnitureContainer = document.getElementById(\"my-furniture-container\");\r\n  let wallContainer = document.getElementById(\"my-wall-container\");\r\n  let fishesContainer = document.getElementById(\"my-fishes-container\");\r\n  let bugsContainer = document.getElementById(\"my-bugs-container\");\r\n  let seaContainer = document.getElementById(\"my-sea-container\");\r\n  let fossilsContainer = document.getElementById(\"my-fossils-container\");\r\n  let deleteBtn = document.getElementById(\"delete-btn\");\r\n  let editBtn = document.getElementById(\"edit-btn\");\r\n\r\n  let promise = await fetch(\r\n    `https://village-simulator.herokuapp.com/villages/${villageID}`\r\n  );\r\n  let data = await promise.json();\r\n\r\n  villageName.innerText = data.villageName;\r\n  (0,_loopObjAndInsertHtml_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.villagers, villagersContainer);\r\n  (0,_loopObjAndInsertHtml_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.furniture, furnitureContainer);\r\n  (0,_loopObjAndInsertHtml_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.wallFurniture, wallContainer);\r\n  (0,_loopObjAndInsertHtml_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.fishes, fishesContainer);\r\n  (0,_loopObjAndInsertHtml_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.bugs, bugsContainer);\r\n  (0,_loopObjAndInsertHtml_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.sea, seaContainer);\r\n  (0,_loopObjAndInsertHtml_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.fossils, fossilsContainer);\r\n\r\n  deleteBtn.addEventListener(\"click\", async (e) => {\r\n    e.preventDefault();\r\n\r\n    let deleteTrue = confirm(\"Do you really wanna delete this village?\");\r\n    if (deleteTrue) {\r\n      await fetch(\r\n        `https://village-simulator.herokuapp.com/villages/${villageID}`,\r\n        {\r\n          method: \"DELETE\",\r\n          headers: { \"Content-Type\": \"application/json\" },\r\n        }\r\n      ).then((res) => {\r\n        console.log(\"Request complete! response:\", res);\r\n      });\r\n\r\n      window.location.assign(\"./villages.html\");\r\n    } else {\r\n      return;\r\n    }\r\n  });\r\n\r\n  editBtn.addEventListener(\"click\", async (e) => {\r\n    e.preventDefault();\r\n    let newVillageName = prompt(\"Choose a new name for this village:\");\r\n\r\n    await fetch(\r\n      `https://village-simulator.herokuapp.com/villages/${villageID}`,\r\n      {\r\n        method: \"PATCH\",\r\n        headers: { \"Content-Type\": \"application/json\" },\r\n        body: JSON.stringify({\r\n          newVillageName: newVillageName,\r\n        }),\r\n      }\r\n    ).then((res) => {\r\n      console.log(\"Request complete! response:\", res);\r\n    });\r\n\r\n    window.location.reload();\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://web2-frontend-cansu-1907/./src/myVillage.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/myVillage.js");
/******/ 	
/******/ })()
;