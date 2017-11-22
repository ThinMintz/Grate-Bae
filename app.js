// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Created a series of questions
inquirer.prompt([
	  {
    type: "list",
    name: "task",
    message: "What would you like to do?",
    choices: ["POST AN ITEM", "BID ON AN ITEM"]
  },
]);