const Manager  = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern   = require("./lib/Intern");
const inquirer = require("inquirer");
const path     = require("path");
const fs       = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { create } = require("domain");

// code written to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints)
const teamMembers = [];
const arrayId = [];

function appMenu() {
    function  createTeam(){
        // inquirer to ask which type of employee you want to create and runs the relevant function
        inquirer.prompt([
            {
                type: "input", 
                name: "CreateTeam",
                message: "Would you like to begin building out your development team?",
                valdiate: answer => {
                    if (answer !== "") {
                        return true;
                    }

                    return "Come back again when you are ready to build out your development team.";
                }
            }
            // err answer parameters? 
        ]).then(answer => {
            createManager();
        });
    function createManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "what is your manager's name",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }

                    return "Please enter a valid name.";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is your employee's ID?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }

                    return "Please enter a valid ID.";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is your employee's email?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }

                    return "Please enter a valid email.";
                }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the designated Office Number?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }

                    return "Please enter a valid Office Number.";
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.mangerOfficeNumber);
            teamMembers.push(manager);
            arrayId.push(answers.managerId);
            createEngineer();
        });
    }

    function createEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your engineer's name?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }

                    return "Please enter a valid name.";
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is your employee's ID?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }

                    return "Please enter a valid ID.";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is your employee's email?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }

                    return "Please enter a valid email.";
                }
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "What is your employee's gitHub?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }

                    return "Please enter a valid gitHub.";
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            arrayId.push(answers.engineerId);
            createIntern();
        });
    }

    function buildTeam() {
        // create an output directory if the output path doesn't exist
        if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR);
        }
        // pass in an array containing all employee objects; the `render` function will
        // generate and return a block of HTML including templated divs for each employee
        // write HTML returned from the render function to a file named 'team.html'
        // in the 'output' folder - - variable 'outputPath' targets this location 
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
      }

      
}

appMenu();

// Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
