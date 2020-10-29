// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const uniqid = require('uniqid');


class Engineer extends Employee {
  constructor(name, email, employeeId, gitHub) {
    super(name, email, employeeId);
    this.gitHub = gitHub;
  }
  
  getRole() {
    return "Engineer"
  }

  getGitHub() {
    return this.gitHub
  }

}

module.exports = Engineer
