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

/***/ "./src/catch.js":
/*!**********************!*\
  !*** ./src/catch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ catchItem)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/getData.js\");\n\r\n\r\n// This function is used to catch a random fish, bug, sea and to find a random fossil\r\nasync function catchItem(itemName) {\r\n  // We fetch the url with the right parameter -> fish, bugs, sea or fossils\r\n  let data = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`http://acnhapi.com/v1/${itemName}/`);\r\n  let btn = document.getElementById(itemName);\r\n  // This counter variable is used to prevent catching more than 6 items (fishes, bugs, sea creatures or fossils)\r\n  let counter = 1;\r\n\r\n  btn.addEventListener(\"click\", async (e) => {\r\n    e.preventDefault();\r\n    let myArray = [];\r\n\r\n    // Loop over the data and push every single item into the 'myArray' array\r\n    for (let item in data) {\r\n      myArray.push(data[item]);\r\n    }\r\n\r\n    // This if statement looks if the counter is less or equal to 6\r\n    // If its less or equal to 6  -> executes code\r\n    // Else  -> there is a popup that notifies the user that the limit of items to catch is reached\r\n    if (counter <= 6) {\r\n      let randomItem = myArray[Math.floor(Math.random() * myArray.length)];\r\n      let container = document.getElementById(`${itemName}${counter}`);\r\n\r\n      // This if statement handles the logic for setting the items in the session storage\r\n      // During the creation of a village the stored data in the session storage is mandatory\r\n      if (itemName == \"fossils\") {\r\n        sessionStorage.setItem(\r\n          `${itemName}${counter}`,\r\n          randomItem[\"file-name\"]\r\n        );\r\n      } else {\r\n        sessionStorage.setItem(`${itemName}${counter}`, randomItem.id);\r\n      }\r\n\r\n      // The object for the fossils doesn't have 'icon_uri'\r\n      // This if statement fixes that issue\r\n      if (randomItem[\"icon_uri\"] != undefined) {\r\n        container.innerHTML = `<img class=\"items-img\" src=\"${randomItem[\"icon_uri\"]}\" title=\"${randomItem.name[\"name-EUen\"]}\">`;\r\n      } else {\r\n        container.innerHTML = `<img class=\"items-img\" src=\"${randomItem[\"image_uri\"]}\" title=\"${randomItem.name[\"name-EUen\"]}\">`;\r\n      }\r\n    } else {\r\n      alert(`Limit of ${itemName} reached`);\r\n    }\r\n    // Incrementing the counter every time the click function is triggered\r\n    counter++;\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://web2-frontend-cansu-1907/./src/catch.js?");

/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getData)\n/* harmony export */ });\n// This function needs an url as argument\r\n// This function returns data as an object with the fetched url\r\nasync function getData(url) {\r\n  let resp = await fetch(url);\r\n  let data = resp.json();\r\n  return data;\r\n}\r\n\n\n//# sourceURL=webpack://web2-frontend-cansu-1907/./src/getData.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/catch.js");
/******/ 	
/******/ })()
;