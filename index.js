// Starting require links to other files as well as calling fs and inquirer
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const fs = require("fs");
const newFile = ('./dist/team.html')
const generateTeam = require("./src/template.js")

// Empty array
teamArray = [];

// Function for starting app
const runApp = () => {
  const createTeam = () => {
    // Initial prompt 
    inquirer.prompt([{
      type: "list",
      message: "Form your team! Who are we adding today?",
      name: "addEmployee",
      choices: ["Manager", "Engineer", "Intern", "Employee list completed"]
    }]).then(function (userInput) {
      // Switch and case depending on what choice is made above ^^^
      switch (userInput.addEmployee) {
        case "Manager":
          createManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;

        default:
          writeFile();
      }
    })
  }
  // Function to make manager object
  const createManager = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?",
      },
      {
        type: 'input',
        name: 'managerId',
        message: "Please enter the manager's ID.",
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: "Please enter the manager's email.",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the manager's office number?"
      }

    ])
      .then(managerInput => {
        const { managerName, managerId, managerEmail, managerOfficeNumber } = managerInput;
        const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);

        teamArray.push(manager);
        console.log(manager);
        createTeam();
      })
  };

  // Function to make engineer object
  const addEngineer = () => {
    inquirer.prompt([

      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?"
      },

      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's employee ID number?"
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?"
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's GitHub username?"
      }

    ])
      .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        createTeam();
      });
  }
 
  // Function to make intern object
  const addIntern = () => {
    inquirer.prompt([

      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?"
      },

      {
        type: "input",
        name: "internId",
        message: "What is the intern's employee ID number?"
      },

      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?"
      },

      {
        type: "input",
        name: "internSchool",
        message: "What school does the intern attend?"
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      createTeam();
    });
  }

  // Creates the team.html using template.js
  const writeFile = () => {
    fs.writeFileSync(newFile, generateTeam(teamArray), err => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log("Success! Check out your new team.html page")
      }
    })
  };

  createTeam();

}

runApp(); 