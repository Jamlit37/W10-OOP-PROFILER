// Parent constructor class
class Employee {
  constructor (name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
  }

  getName () {
      return this.name;
  }
  
  getId () {
      return this.id;
  }

  getEmail () {
      return this.email;
  }

  getRole() {
      return "Employee"
  }

}

// Export call
module.exports = Employee;