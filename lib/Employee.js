// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, email, employeeId) {
    this.name         = name;
    this.email        = email;
    this.employeeId   = employeeId;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.employeeId;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }

}

module.exports = Employee;