// Packages needed for this application
const inquirer = require("inquirer");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern");

// Need empty array to push objects to = []
employee = []
console.log("hello", employee)


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
        teamMemberManager();
      }
      else if (answers.role === 'Engineer') {
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
    const manager = new Manager(answers.id, answers.name, answers.email, answers.officeNumber) 
    console.log(manager)
    employee.push(manager) 
  }
  }
  )};

const manager = [
  {
    type: "input",
    name: "id",
    message: "Please enter manager's ID number:",
  },
  {
    type: "input",
    name: "name",
    message: "Please enter manager's name:",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter manager's email:",
  },   
  {
    type: "input",
    name: "officeNumber",
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
      const engineer = new Engineer(answers.id, answers.name, answers.email, answers.github) 
      console.log(engineer)
      employee.push(engineer) 
    }
    }
  )};

const engineer = [
  {
    type: "input",
    name: "id",
    message: "Please enter engineer's ID number:",
  },
  {
    type: "input",
    name: "name",
    message: "Please enter engineer's name:",
  },
  
  {
    type: "input",
    name: "email",
    message: "Please enter engineer's email::",
  },  
  {
    type: "input",
    name: "github",
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
    const intern = new Intern( answers.id, answers.name, answers.email, answers.school) 
    console.log(intern)
    employee.push(intern)
    console.log(JSON.stringify(answers, null, ' '));
    }
  )};

const intern = [
  {
    type: "input",
    name: "id",
    message: "Please enter intern's ID number:",
  },
  {
    type: "input",
    name: "name",
    message: "Please enter intern's name:",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter intern's email:",
  },  
  {
    type: "input",
    name: "school",
    message: "Please enter intern's school:",
  },  
  {
    type: "confirm",
    name: "add",
    message: "Would you like to add another team member?",
  },
];

