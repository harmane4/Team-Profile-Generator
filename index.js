// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Questions array containing question object
const teamMemberRole = [
  {
    type: "list",
    name: "role",
    message: "Please select team member's role:",
    choices: ["Manager", "Engineer", "Intern"],
  },
];

  // If manager chosen go to manager 
  // If engineer chosen go to engineer 
  // If intern chosen go to intern

  createTeamMember()

  function createTeamMember() {
    inquirer.prompt(teamMemberRole).then((answers) => {
      if (answers.role === 'Manager') {
        console.log("Manager role chosen");
        teamMemberManager();
      }
      if (answers.role === 'Engineer') {
        console.log("Engineer role chosen");
        teamMemberEngineer();
      } else {
        teamMemberIntern()
      }
    }
    )};

function teamMemberManager() {
  inquirer.prompt(manager).then((answers) => {
    console.log(JSON.stringify(answers, null, ' '));
    }
  )};


const manager = [
  {
    type: "input",
    name: "name",
    message: "Please enter manager's name:",
  },
  {
    type: "input",
    name: "ID",
    message: "Please enter manager's ID number:",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter manager's email:",
  },   
  {
    type: "input",
    name: "email",
    message: "Please enter manager's office number:",
  },
  {
    type: "confirm",
    name: "add",
    message: "Would you like to add another team member?",
    // if (answers.name === 'true') {
    //     console.log("a")
    //      // If user would like to add another team member do something 
    // } else {
    //     console.log("b")
    //       // Else append information to file 
    // }
  },
];

function teamMemberEngineer() {
  inquirer.prompt(engineer).then((answers) => {
    console.log(JSON.stringify(answers, null, ' '));
    }
  )};

const engineer = [
  {
    type: "input",
    name: "name",
    message: "Please enter engineer's name:",
  },
  {
    type: "input",
    name: "ID",
    message: "Please enter engineer's ID number:",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter engineer's GitHub username:",
  },   
  {
    type: "confirm",
    name: "add",
    message: "Would you like to add another team member?",
    // if (answers.name === 'true') {
    //     console.log("a")
    //      // If user would like to add another team member do something 
    // } else {
    //     console.log("All done")
    //       // Else append information to file 
    // }
  },
];

function teamMemberIntern() {
  inquirer.prompt(intern).then((answers) => {
    console.log(JSON.stringify(answers, null, ' '));
    }
  )};


const intern = [
  {
    type: "input",
    name: "name",
    message: "Please enter intern's name:",
  },
  {
    type: "input",
    name: "ID",
    message: "Please enter intern's ID number:",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter intern's email:",
  },   
  {
    type: "confirm",
    name: "add",
    message: "Would you like to add another team member?",
    // if (answers.name === 'true') {
    //     console.log("a")
    //      // If user would like to add another team member do something 
    // } else {
    //     console.log("All done")
    //       // Else append information to file 
    // }
  },
];



// inquirer.prompt(teamMember).then((answers) => {
//     const answersArray = Object.values(answers);
//     const answersAsString = answersArray.join('\n');
//     const filename = "test.txt";
//     fs.writeFile(filename, answersAsString, (err) =>
//     err ? console.log(err) : console.log('Success!')
//     );
// });

// // WRITE INFORMATION TO A FILE
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) =>
//     err ? console.log(err) : console.log('README.md file created')
//     );
// }

// const fileName = 'page.html';

// // TODO: Create a function to initialize app
// function init() {
// inquirer.prompt(teamMember).then((data) => {
// let completedTemplate = generateMarkdown(data);
// writeToFile(fileName, completedTemplate)
// })
// }

// // Function call to initialize app
// init();
