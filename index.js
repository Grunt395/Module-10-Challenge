const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
// path fs built in
// path generate a path in both system
const path = require("path");
// fs create file or read file
const fs = require("fs");

console.log("Welcome to team generator");

const teamMembers = []


function appMenu() {
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the team manager name?",
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the team manager id?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager email?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the team manager office Number?",
      },
  ]).then((answers) => {
    const manager = new Manager(
        answers.managerName,
        answers.managerId, 
        answers.managerEmail,
        answers.managerOfficeNumber
    )
    console.log(manager);
    teamMembers.push(manager);
    createTeam()
  });
}

function createTeam() {
    inquirer.prompt([{
        type: "list",
        name: "teamChoice",
        message: "Which type of team member",
        choices: [
            "Engineer",
            "Intern",
            "idk"
        ]
    }]).then((userChoice) => {
        console.log(userChoice);
        if(userChoice.teamChoice === "Engineer"){
            // function filling all the attributes for engineer 
        } else if(userChoice.teamChoice === "Intern"){
                        // function filling all the attributes for intern
        }
    })
}

appMenu();
