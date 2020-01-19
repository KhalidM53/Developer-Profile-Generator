const inquirer = require("inquirer");
const axios = require("axios");
const util = require("util");
const fs = require('fs');
const pdf = require('html-pdf');
var gs = require('github-scraper');
const writeFileAsync = util.promisify(fs.writeFile);
const gsPromise = util.promisify(gs);
var github;
function userInput() {
  return inquirer.prompt([

    {
      type: "input",
      message: "What is your Github username?",
      name: "username"
    },
    {
      type: "list",
      message: "What color would you like for text??",
      name: "color",
      choices: [
        "black",
        "purple",
        "green"
      ]
    },
    {
      type: "list",
      message: "What color would you like for shadows??",
      name: "shadow",
      choices: [
        "black",
        "blue",
        "grey"
      ]
    },
  ])
}
