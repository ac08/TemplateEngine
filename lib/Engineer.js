// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const uniqid = require('uniqid');


class Engineer extends Employee {
  constructor(title, gitHub, firstName, lastName, email, employeeId) {
    super(firstName, lastName, email, employeeId);
    this.title  = title; 
    this.gitHub = gitHub;
  }
}

