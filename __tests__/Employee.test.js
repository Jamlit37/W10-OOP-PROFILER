const Employee = require("../lib/Employee");

describe('Employee', () => {
  it('should create an employee object', () => {
    const employee = new Employee("James", 123, "james@test.com")
    expect(employee.name).toEqual("James")
    expect(employee.id).toEqual(123)
    expect(employee.email).toEqual("james@test.com")
    // expect(employee.getName).toEqual("James")
    // expect(employee.getId).toEqual(123)
    // expect(employee.getEmail).toEqual("james@test.com")
  });

  it('should get employee name', () => {
    const employee = new Employee("James", 123, "james@test.com")

    expect(employee.name).toEqual("James")
  });

  it('should get employee id', () => {
    const employee = new Employee("James", 123, "james@test.com")

    expect(employee.id).toEqual(123)
  });

  it('should get employee email', () => {
    const employee = new Employee("James", 123, "james@test.com")

    expect(employee.email).toEqual("james@test.com")
  });
});