// Packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs');


// Questions array containing question object
const teamMember = [
    {
        type: 'input' ,
        name: 'name' ,
        message: "Please enter team member's name:" ,
    },
    {
        type: 'list' , 
        name: 'role' , 
        message: "Please select team member's role:" ,
        choices: ['Manager', 'Engineer','Intern'],
    },
    {
        type: 'input' ,
        name: 'ID' , 
        message: "Please enter team member's ID number:" ,
    },
    {
        type: 'input' , 
        name: 'email' , 
        message: "Please enter team member's email:" ,
    },
    {
        type: 'confirm' , 
        name: 'add' , 
        message: "Would you like to add another team member?" ,
        // If statement here
    },
   
]

inquirer.prompt(teamMember).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
});

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