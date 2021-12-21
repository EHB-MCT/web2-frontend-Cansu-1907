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

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getData)\n/* harmony export */ });\n// This function needs an url as argument\r\n// This function returns data as an object with the fetched url\r\nasync function getData(url) {\r\n  let resp = await fetch(url);\r\n  let data = resp.json();\r\n  return data;\r\n}\r\n\n\n//# sourceURL=webpack://web2-frontend-cansu-1907/./src/getData.js?");

/***/ }),

/***/ "./src/sessionStorageToObject.js":
/*!***************************************!*\
  !*** ./src/sessionStorageToObject.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sessionStorageToObject)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/getData.js\");\n\r\n\r\n// This function is used to convert id from the session storage to data\r\n// The data is stored in a object and it's returned when calling this function\r\n\r\n// parameters:\r\n// itemName -> villager, furniture, wall-furniture, fish, bugs, sea, fossils\r\n// amount   -> amount of items\r\n//          -> amount = 5 for villager, furniture & wall-furniture\r\n//          -> amount = 6 for fish, bugs, sea, fossils\r\n\r\nasync function sessionStorageToObject(itemName, amount) {\r\n  let obj = {};\r\n\r\n  // Populates the empty object 'obj' with the id's from the session storage\r\n  for (let i = 0; i <= amount; i++) {\r\n    if (sessionStorage.getItem(`${itemName}${i}`)) {\r\n      obj[`${itemName}${i}`] = sessionStorage.getItem(`${itemName}${i}`);\r\n    }\r\n  }\r\n\r\n  // Convert the id's from 'obj' to data with the help of the 'getData' function\r\n  for (let a in obj) {\r\n    // This if statement checks the name of the item -> Some items have different url\r\n    if (itemName == \"furniture\" || itemName == \"wall-furniture\") {\r\n      obj[a] = `https://acnhapi.com/v1/images/furniture/${obj[a]}`;\r\n    } else if (itemName == \"villager\") {\r\n      let data = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`http://acnhapi.com/v1/${itemName}s/${obj[a]}`);\r\n      obj[a] = data;\r\n    } else {\r\n      let data = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`http://acnhapi.com/v1/${itemName}/${obj[a]}`);\r\n      obj[a] = data;\r\n    }\r\n  }\r\n  return obj;\r\n}\r\n\n\n//# sourceURL=webpack://web2-frontend-cansu-1907/./src/sessionStorageToObject.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/sessionStorageToObject.js");
/******/ 	
/******/ })()
;