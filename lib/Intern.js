// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const uniqid   = require('uniqid');
const id       = uniqid();


class Intern extends Employee {
  constructor(name, email, employeeId, university) {
    super(name, email, employeeId);
    this.university = university;
  }

  getRole() {
    return "Intern";
  }

  getUniversity() {
    return this.university;
  }

}

module.exports = Intern;