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

/***/ }),

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel.js */ \"./src/carousel.js\");\n/* harmony import */ var _userInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInfo.js */ \"./src/userInfo.js\");\n/* harmony import */ var _usersList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usersList.js */ \"./src/usersList.js\");\n\n\n\n\nwindow.onload = async function () {\n  (0,_carousel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_userInfo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  let loginContainer = document.getElementById(\"login-container\");\n  let loggedInContainer = document.getElementById(\"logged-in-container\");\n  let form = document.getElementById(\"login-form\");\n  let username = document.getElementById(\"username\");\n  let password = document.getElementById(\"password\");\n  let existingUsers = await (0,_usersList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  let connectedUser = localStorage.getItem(\"username\");\n\n  if (connectedUser == undefined) {\n    loginContainer.style.display = \"flex\";\n    loggedInContainer.style.display = \"none\";\n  } else {\n    loginContainer.style.display = \"none\";\n    loggedInContainer.style.display = \"flex\";\n\n    let htmlString = `\n    <h1>Hi ${connectedUser}</h1>\n    <p>If you wanna <b>log out</b> press the button down.</p>\n    <button id=\"log-out\">Log Out</button>\n    `;\n\n    loggedInContainer.innerHTML = htmlString;\n\n    let logOutBtn = document.getElementById(\"log-out\");\n\n    logOutBtn.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n      localStorage.removeItem(\"username\");\n      window.location.reload();\n    });\n  }\n\n  form.addEventListener(\"submit\", async (e) => {\n    e.preventDefault();\n    if (existingUsers.includes(username.value.toLowerCase())) {\n      let promise = await fetch(\n        `https://village-simulator.herokuapp.com/users?username=${username.value.toLowerCase()}`\n      );\n      let userData = await promise.json();\n\n      if (password.value == userData[0].password) {\n        localStorage.setItem(\"username\", username.value.toLowerCase());\n        window.location.reload();\n      } else {\n        alert(\"Incorrect password!\");\n      }\n    } else {\n      alert(\"This username doesn't exist\");\n    }\n  });\n};\n\n\n//# sourceURL=webpack://web2-frontend-cansu-1907/./src/login.js?");

/***/ }),

/***/ "./src/userInfo.js":
/*!*************************!*\
  !*** ./src/userInfo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ userInfo)\n/* harmony export */ });\nfunction userInfo() {\r\n  let userInfoContainer = document.getElementById(\"user-info\");\r\n  let connectedUser = localStorage.getItem(\"username\");\r\n\r\n  if (connectedUser == undefined) {\r\n    userInfoContainer.style.display = \"none\";\r\n  } else {\r\n    let htmlString = `\r\n      <p>You are logged in as: <b>${connectedUser}</b></p>\r\n      <figure>\r\n          <img src=\"./images/profile.png\" alt=\"\">\r\n      </figure>\r\n      `;\r\n    userInfoContainer.innerHTML = htmlString;\r\n    userInfoContainer.style.display = \"flex\";\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://web2-frontend-cansu-1907/./src/userInfo.js?");

/***/ }),

/***/ "./src/usersList.js":
/*!**************************!*\
  !*** ./src/usersList.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ usersList)\n/* harmony export */ });\n// This function returns an array with all the usernames of all the existing users\r\nasync function usersList() {\r\n  let existingUsers = [];\r\n\r\n  let promise = await fetch(\"https://village-simulator.herokuapp.com/users\");\r\n  let data = await promise.json();\r\n\r\n  for (let user in data) {\r\n    existingUsers.push(data[user].username.toLowerCase());\r\n  }\r\n  // console.log(existingUsers);\r\n  return await existingUsers;\r\n}\r\n\n\n//# sourceURL=webpack://web2-frontend-cansu-1907/./src/usersList.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/login.js");
/******/ 	
/******/ })()
;