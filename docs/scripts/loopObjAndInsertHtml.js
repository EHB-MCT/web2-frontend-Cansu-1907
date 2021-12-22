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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loopObjAndInsertHtml)\n/* harmony export */ });\nfunction loopObjAndInsertHtml(data, container) {\r\n  // console.log(data);\r\n  let htmlString = \"\";\r\n  if (\r\n    \"villager1\" in data ||\r\n    \"villager2\" in data ||\r\n    \"villager3\" in data ||\r\n    \"villager4\" in data ||\r\n    \"villager5\" in data\r\n  ) {\r\n    for (let item in data) {\r\n      htmlString += `\r\n        <div class=\"shadow\"><img class=\"villager-img\" src=\"${data[item][\"image_uri\"]}\" title=\"${data[item].name[\"name-USen\"]}\"></div>\r\n        `;\r\n      container.innerHTML = htmlString;\r\n    }\r\n    container.innerHTML = htmlString;\r\n  } else if (\r\n    \"furniture1\" in data ||\r\n    \"furniture2\" in data ||\r\n    \"furniture3\" in data ||\r\n    \"furniture4\" in data ||\r\n    \"furniture5\" in data ||\r\n    \"wall-furniture1\" in data ||\r\n    \"wall-furniture2\" in data ||\r\n    \"wall-furniture3\" in data ||\r\n    \"wall-furniture4\" in data ||\r\n    \"wall-furniture5\" in data\r\n  ) {\r\n    for (let item in data) {\r\n      htmlString += `\r\n        <div class=\"shadow\"><img src=\"${data[item]}\"}\"></div>\r\n        `;\r\n    }\r\n  } else if (\"fish1\" in data || \"bugs1\" in data || \"sea1\" in data) {\r\n    for (let item in data) {\r\n      htmlString += `\r\n        <div class=\"shadow\"><img src=\"${data[item][\"icon_uri\"]}\" title=\"${data[item].name[\"name-USen\"]}\"}></div>\r\n        `;\r\n    }\r\n  } else if (\"fossils1\" in data) {\r\n    for (let item in data) {\r\n      htmlString += `\r\n        <div class=\"shadow\"><img src=\"${data[item][\"image_uri\"]}\" title=\"${data[item].name[\"name-USen\"]}\"}></div>\r\n        `;\r\n    }\r\n  }\r\n\r\n  container.innerHTML = htmlString;\r\n}\r\n\n\n//# sourceURL=webpack://web2-frontend-cansu-1907/./src/loopObjAndInsertHtml.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/loopObjAndInsertHtml.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;