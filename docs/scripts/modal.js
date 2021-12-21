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

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ modal)\n/* harmony export */ });\n// https://www.w3schools.com/howto/howto_css_modals.asp\r\n\r\n// This function contains the logic for the modal\r\nfunction modal(itemName, btnName) {\r\n  let addBtnList = document.querySelectorAll(`.${btnName}`);\r\n  let modalContainer = document.getElementById(`${itemName}Modal`);\r\n\r\n  // Open the modal after clicking on one of the buttons\r\n  addBtnList.forEach((btn) => {\r\n    btn.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n\r\n      // The code executes only if its empty\r\n      if (btn.children.length == 0) {\r\n        if (e.target.id != null) {\r\n          sessionStorage.setItem(\"containerToAdd\", e.target.id);\r\n        }\r\n        if (e.target.classList.contains(itemName)) {\r\n          modalContainer.style.display = \"block\";\r\n        }\r\n      } else {\r\n        return;\r\n      }\r\n    });\r\n  });\r\n\r\n  // Close the modal after clicking somewhere in the modal container\r\n  modalContainer.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    modalContainer.style.display = \"none\";\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://web2-frontend-cansu-1907/./src/modal.js?");

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
/******/ 	__webpack_modules__["./src/modal.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;