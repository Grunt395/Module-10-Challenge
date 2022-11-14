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
  inquirer.prompt([{
    type: "list",
    name: "menu",
    message: "What would you like to do?",
    choices: [
      "Enter team members",
      "Generate HTML",
      "Quit"
    ]
  }]).then((choice) => {
    // console.log(choice);
    switch (choice.menu) {
      case "Enter team members":
        createTeam();
        break;
      case "Generate HTML":
        // Create HTML function
        break;

      default:
        break;
    }
  })

  // inquirer.prompt([
  //   {
  //     type: "input",
  //     name: "managerName",
  //     message: "What is the team manager name?",
  //   },
  //   {
  //       type: "input",
  //       name: "managerId",
  //       message: "What is the team manager id?",
  //     },
  //     {
  //       type: "input",
  //       name: "managerEmail",
  //       message: "What is the team manager email?",
  //     },
  //     {
  //       type: "input",
  //       name: "managerOfficeNumber",
  //       message: "What is the team manager office Number?",
  //     },
  // ]).then((answers) => {
  //   const manager = new Manager(
  //       answers.managerName,
  //       answers.managerId, 
  //       answers.managerEmail,
  //       answers.managerOfficeNumber
  //   )
  //   console.log(manager);
  //   teamMembers.push(manager);
  //   createTeam()
  // });
}

function roleQuestions() {

}

function createTeam() {
  var choices = [];
  if (teamMembers.length === 0) {
    choices = ["Manager"];
  } else {
    choices = [
      "Engineer",
      "Intern",
      "Manager"
    ]
  }
  inquirer.prompt([{
      type: "list",
      name: "teamChoice",
      message: "Which type of team member",
      choices: choices
    },
    {
      type: "input",
      name: "name",
      message: "What is the team member's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the team member's id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the team member's email?",
    }
    // {
    //   type: "input",
    //   name: "managerOfficeNumber",
    //   message: "What is the team manager office Number?",
    // }
  ]).then((teamMember) => {
    console.log();
    var roleQuestion;
    if (teamMember.teamChoice === "Manager") {
      // function filling all the attributes for engineer
      roleQuestion = {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the team manager office Number?",
      };
    } else if (teamMember.teamChoice === "Intern") {
      // function filling all the attributes for intern

    }
    inquirer.prompt([
      roleQuestion
    ]).then((roleAnswer) => {
      console.log(roleAnswer);
    })
    console.log(teamMembers);
      appMenu();
  })
}

appMenu();