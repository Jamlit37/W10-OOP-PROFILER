const Manager = require("../lib/Manager");

describe('Manager', () => {
  it('should create an engineer object', () => {
    const manager = new Manager("James", 123, "james@test.com", "4")
    expect(manager.name).toEqual("James")
    expect(manager.id).toEqual(123)
    expect(manager.email).toEqual("james@test.com")
    expect(manager.officeNumber).toEqual("4")
 
  });

  it('should get manager name', () => {
    const manager = new Manager("James", 123, "james@test.com", "4")

    expect(manager.name).toEqual("James")
  });

  it('should get manager id', () => {
    const manager = new Manager("James", 123, "james@test.com", "4")

    expect(manager.id).toEqual(123)
  });

  it('should get manager email', () => {
    const manager = new Manager("James", 123, "james@test.com", "4")

    expect(manager.email).toEqual("james@test.com")
  });

  it('should get manager office number', () => {
    const manager = new Manager("James", 123, "james@test.com", "4")

    expect(manager.officeNumber).toEqual("4")
  });

});