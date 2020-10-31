const Manager  = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern   = require("./lib/Intern");
const inquirer = require("inquirer");
const path     = require("path");
const fs       = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];
const arrayId = [];

// code written to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints)
function createManager() {
    return inquirer.prompt([
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
      // create instance of Manager Class given input from coordinated inquirer prompts 
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerId, answers.officeNumber);
      teamMembers.push(manager);
      arrayId.push(answers.managerId);
      // call userOptions() function to continue or exit program
      userOption();
  });
}

function createEngineer() {
    return inquirer.prompt([
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
        // create instance of Engineer Class given input from coordinated inquirer prompts 
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamMembers.push(engineer);
        arrayId.push(answers.engineerId);
        // call userOptions() function to determine next step
        userOption();
    });
}
function createIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is your intern's name?",
            validate: answer => {
                if(answer !== "") {
                    return true;
                }

                return "Please enter a valid name.";
            }
        },
        {
            type: "input",
            name: "internId",
            message: "What is your intern's ID?",
            validate: answer => {
                if(answer !== "") {
                    return true;
                }

                return "Please enter a valid ID.";
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is your intern's email?",
            validate: answer => {
                if(answer !== "") {
                    return true;
                }

                return "Please enter a valid email.";
            }
        },
        {
            type: "input",
            name: "university",
            message: "What university does your intern attend?",
            validate: answer => {
                if(answer !== "") {
                    return true;
                }

                return "Please enter a valid university.";
            }
        }
    ]).then(answers => {
        // create instance of Intern Class given input from coordinated inquirer prompts 
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.university);
        teamMembers.push(intern);
        arrayId.push(answers.internId);
        // call userOptions() function to determine next step
        userOption();
    });
}
// buildTeam function called to create output file using fs module
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

// userOptions functionality established to determine next step of program
function userOption() {
    return inquirer.prompt([
        {
            type: "list",
            name: "userOption",
            message: "Select your next step.",
            choices: ["Build out Engineer", "Build out Intern", "Exit Program"],
        }
    ]).then(answer => {
        if (answer.userOption === "Build out Engineer") {
            createEngineer();
        } else if (answer.userOption === "Build out Intern") {
            createIntern();
        } else buildTeam();
    });
}

// init program
createManager();
 