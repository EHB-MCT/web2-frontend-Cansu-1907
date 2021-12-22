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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/dataInHtml.js");
/******/ 	
/******/ })()
;