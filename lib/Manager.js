// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const uniqid   = require('uniqid');
const id       = uniqid();


class Manager extends Employee {
  constructor(title, officeNumber, firstName, lastName, email, employeeId) {
    super(firstName, lastName, email, employeeId);
    this.title      = title; 
    this.office     = officeNumber;
  }
}
