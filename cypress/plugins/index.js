require('dotenv').config()
const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");
const {verifyDownloadTasks} = require('cy-verify-downloads')

module.exports = (on, config) => {
  on('task',verifyDownloadTasks)
  const options = {
    ...browserify.defaultOptions,
    typescript: require.resolve("typescript"),
  };

  on("file:preprocessor", cucumber(options));
  // if this is the first time that you are opening this project then you probably do not have a .env file setup
  // if you do not have a .env file then install the .env library from the command line using the below command
  // TYPE: npm install dotenv --save

  // Then create a file in your root directory called .env
  // enter your env variables in that file.  example below:

  //example of env variable Entry here:
  // these below entries map to the config.env.xxx entries on line 25/26
    //USERNAME=admin.voucher@sae.org
    //PASSWORD=AdminVoucher@81


  // these entries map to the .env file and the .env file allows us to hide/mask password since .env is git ignored
  config.env.username = process.env.Test_USERNAME
  config.env.password = process.env.Test_PASSWORD
  config.env.test_url = process.env.Test_URL
  config.env.Homepage_url = process.env.Homepage_URL

//these two sections below configures command line logging via cy.task
// to use command line logging refer to log message for cy.visit in Login.ts
  on('task', {
    log: log,
  });
  return config
};

  const log = (message) => {
    console.log(message);
  return null;  
}

// module.exports = (on, config) => {
//   require('cypress-mochawesome-reporter/plugin')(on);
// };