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

/***/ "./src/carousel.js":
/*!*************************!*\
  !*** ./src/carousel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ carousel)\n/* harmony export */ });\nfunction carousel() {\n  let carouselImgContainer = document.getElementById(\n    \"carousel-image-container\"\n  );\n  let carouselBtn = document.querySelectorAll(\".carousel-btn\");\n  let firstCarouselBtn = document.getElementById(\"first-img-btn\");\n  let secondCarouselBtn = document.getElementById(\"second-img-btn\");\n  let thirdCarouselBtn = document.getElementById(\"third-img-btn\");\n\n  carouselBtn.forEach((btn) => {\n    btn.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n\n      if (e.target.id == \"first-img-btn\") {\n        firstCarouselBtn.classList.add(\"active-carousel\");\n        secondCarouselBtn.classList.remove(\"active-carousel\");\n        thirdCarouselBtn.classList.remove(\"active-carousel\");\n        carouselImgContainer.innerHTML =\n          \"<img src='./images/carousel-img-1.jpeg'>\";\n      } else if (e.target.id == \"second-img-btn\") {\n        secondCarouselBtn.classList.add(\"active-carousel\");\n        firstCarouselBtn.classList.remove(\"active-carousel\");\n        thirdCarouselBtn.classList.remove(\"active-carousel\");\n        carouselImgContainer.innerHTML =\n          \"<img src='./images/carousel-img-2.jpg'>\";\n      } else if (e.target.id == \"third-img-btn\") {\n        thirdCarouselBtn.classList.add(\"active-carousel\");\n        firstCarouselBtn.classList.remove(\"active-carousel\");\n        secondCarouselBtn.classList.remove(\"active-carousel\");\n        carouselImgContainer.innerHTML =\n          \"<img src='./images/carousel-img-3.jpg'>\";\n      }\n    });\n  });\n}\n\n\n//# sourceURL=webpack://web2-frontend-cansu-1907/./src/carousel.js?");

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
/******/ 	__webpack_modules__["./src/carousel.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;