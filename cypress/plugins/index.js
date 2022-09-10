const cucumber = require("cypress-cucumber-preprocessor").default;
// eslint-disable-next-line
module.exports = (on, config) => {
  on("file:preprocessor", cucumber());
};
