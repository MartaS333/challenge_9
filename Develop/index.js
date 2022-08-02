// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");
const util = require("util");
// TODO: Create an array of questions for user input
const questions = [
  // inquirer
  //   .prompt([
  {
    type: "input",
    name: "gitHub",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "projectName",
    message: "What is your project's name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project:",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "dependencies",
    message: "What command should be run to install dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
    default: "npm test",
  },
  {
    type: "input",
    name: "useRepo",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "contributeRepo",
    message: "What does the user need to know about contributing to the repo?",
  },
  //   ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
}

const writeFileAsync = util.promisify(writeToFile);
// TODO: Create a function to initialize app
async function init() {
  try {
    const userResponse = await inquirer.prompt(questions);
    console.log("Your Response: ", userResponse);

    const markdown = generateMarkdown(userResponse);
    console.log(markdown);
    await writeFileAsync("README.md", markdown);
  } catch (err) {
    throw err;
  }
}

// Function call to initialize app
init();
