import userInfo from "./userInfo.js";
import button from "./button.js";

window.onload = function () {
  userInfo();
  button("homepage-login-btn", "./login.html");
  button("homepage-village-btn", "./villages.html");
};
