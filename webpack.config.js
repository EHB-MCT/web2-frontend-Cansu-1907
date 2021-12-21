const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    login: "./src/login.js",
    myVillage: "./src/myVillage.js",
    newVillage: "./src/newVillage.js",
    register: "./src/register.js",
    villages: "./src/villages.js",
    button: "./src/button.js",
    carousel: "./src/carousel.js",
    catch: "./src/catch.js",
    dataInHtml: "./src/dataInHtml.js",
    getData: "./src/getData.js",
    loopObjAndInsertHtml: "./src/loopObjAndInsertHtml.js",
    modal: "./src/modal.js",
    sessionStorageToObject: "./src/sessionStorageToObject.js",
    User: "./src/User.js",
    userInfo: "./src/userInfo.js",
    usersList: "./src/usersList.js",
    village: "./src/village.js",
  },
  output: {
    path: path.resolve(__dirname, "docs/scripts"),
    filename: "[name].js",
  },
  mode: "development",
  watch: true,
};
