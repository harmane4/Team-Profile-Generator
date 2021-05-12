// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee")

// Need empty array to push objects to = []

// Team Member Role
const teamMemberRole = [
  {
    type: "list",
    name: "role",
    message: "Please select team member's role:",
    choices: ["Manager", "Engineer", "Intern"],
  },
];

  createTeamMember()

  function createTeamMember() {
    inquirer.prompt(teamMemberRole).then((answers) => {
      if (answers.role === 'Manager') {
        console.log("Manager role chosen");
        teamMemberManager();
      }
      else if (answers.role === 'Engineer') {
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
  if (answers.add === true) { 
    createTeamMember()
  } else {
    const manager = new Manager(answer.name, answer.id, answer.email, answer.school) 
    Employee.push(manager) 
  }
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
  },
];

function teamMemberEngineer() {
  inquirer.prompt(engineer).then((answers) => {
    if (answers.add === true) { 
      createTeamMember()
    } else {
      console.log(JSON.stringify(answers, null, ' '));
      const engineer = new Engineer(answer.name, answer.id, answer.email, answer.school) 
      Employee.push(engineer) 
    }
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
  },
];

function teamMemberIntern() {
  inquirer.prompt(intern).then((answers) => {
    const intern = new Intern(answer.name, answer.id, answer.email, answer.school) 
    Employee.push(intern)
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
