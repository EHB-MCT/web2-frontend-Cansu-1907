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

/***/ "./src/button.js":
/*!***********************!*\
  !*** ./src/button.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ button)\n/* harmony export */ });\nfunction button(id, link) {\n  document.getElementById(id).addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    window.location.href = link;\n  });\n}\n\n\n//# sourceURL=webpack://web2-frontend-cansu-1907/./src/button.js?");

/***/ }),

/***/ "./src/userInfo.js":
/*!*************************!*\
  !*** ./src/userInfo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ userInfo)\n/* harmony export */ });\nfunction userInfo() {\r\n  let userInfoContainer = document.getElementById(\"user-info\");\r\n  let connectedUser = localStorage.getItem(\"username\");\r\n\r\n  if (connectedUser == undefined) {\r\n    userInfoContainer.style.display = \"none\";\r\n  } else {\r\n    let htmlString = `\r\n      <p>You are logged in as: <b>${connectedUser}</b></p>\r\n      <figure>\r\n          <img src=\"./images/profile.png\" alt=\"\">\r\n      </figure>\r\n      `;\r\n    userInfoContainer.innerHTML = htmlString;\r\n    userInfoContainer.style.display = \"flex\";\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://web2-frontend-cansu-1907/./src/userInfo.js?");

/***/ }),

/***/ "./src/villages.js":
/*!*************************!*\
  !*** ./src/villages.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.js */ \"./src/button.js\");\n/* harmony import */ var _userInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInfo.js */ \"./src/userInfo.js\");\n\n\n\nwindow.onload = async function () {\n  (0,_userInfo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_button_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"add-village-btn\", \"./newVillage.html\");\n  (0,_button_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"login-btn\", \"./login.html\");\n  let connectedUser = localStorage.getItem(\"username\");\n  let beforeLoginContainer = document.getElementById(\"before-login-container\");\n  let afterLoginContainer = document.getElementById(\"after-login-container\");\n  let htmlString = \"\";\n  let villagesShowingContainer = document.getElementById(\n    \"villages-showing-container\"\n  );\n\n  if (connectedUser == undefined) {\n    beforeLoginContainer.style.display = \"flex\";\n    afterLoginContainer.style.display = \"none\";\n    return;\n  }\n\n  beforeLoginContainer.style.display = \"none\";\n  afterLoginContainer.style.display = \"flex\";\n\n  let promise = await fetch(\n    `https://village-simulator.herokuapp.com/villages?username=${connectedUser.toLowerCase()}`\n  );\n  let data = await promise.json();\n  data.forEach((village) => {\n    console.log(village);\n    htmlString += `\n    <div id=\"${village._id}\" class=\"village-btn\">\n    <section><p>${village.villageName}</p></section>\n      <p title=\"Villagers\">${\n        Object.keys(village.villagers).length\n      }<span class=\"material-icons\">groups</span></p>\n      <p title=\"Furniture\">${\n        Object.keys(village.furniture).length\n      }<span class=\"material-icons\">chair</span></p>\n      <p title=\"Wall Furniture\">${\n        Object.keys(village.wallFurniture).length\n      }<span class=\"material-icons\">filter_frames</span></p>\n    </div>\n    `;\n  });\n  villagesShowingContainer.innerHTML = htmlString;\n\n  let villageBtns = document.querySelectorAll(\".village-btn\");\n  villageBtns.forEach((villageBtn) => {\n    villageBtn.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n      sessionStorage.setItem(\"villageID\", villageBtn.id);\n      window.location.assign(\"./myVillage.html\");\n    });\n  });\n};\n\n\n//# sourceURL=webpack://web2-frontend-cansu-1907/./src/villages.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/villages.js");
/******/ 	
/******/ })()
;