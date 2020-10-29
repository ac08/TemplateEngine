// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const uniqid   = require('uniqid');
const id       = uniqid();


class Manager extends Employee {
  constructor(name, email, employeeId, officeNumber) {
    super(name, email, employeeId);
    this.office = officeNumber;
  }

  getRole() {
    return "Manager";
  }

  getOffice() {
    return this.office;
  }

}

module.exports = Manager;