// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const uniqid   = require('uniqid');
const id       = uniqid();


class Intern extends Employee {
  constructor(title, university, firstName, lastName, email, employeeId) {
    super(firstName, lastName, email, employeeId);
    this.title      = title; 
    this.university = university;
  }
}

const andrewCircelli = new Intern("Intern", "Miami University", "Andrew", "Circelli", "ac@gmail.com", id);
