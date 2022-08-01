const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
  it('should create an engineer object', () => {
    const engineer = new Engineer("James", 123, "james@test.com", "jamlit37")
    expect(engineer.name).toEqual("James")
    expect(engineer.id).toEqual(123)
    expect(engineer.email).toEqual("james@test.com")
    expect(engineer.github).toEqual("jamlit37")
 
  });

  it('should get engineer name', () => {
    const engineer = new Engineer("James", 123, "james@test.com", "jamlit37")

    expect(engineer.name).toEqual("James")
  });

  it('should get engineer id', () => {
    const engineer = new Engineer("James", 123, "james@test.com", "jamlit37")

    expect(engineer.id).toEqual(123)
  });

  it('should get engineer email', () => {
    const engineer = new Engineer("James", 123, "james@test.com", "jamlit37")

    expect(engineer.email).toEqual("james@test.com")
  });

  it('should get engineer github', () => {
    const engineer = new Engineer("James", 123, "james@test.com", "jamlit37")

    expect(engineer.github).toEqual("jamlit37")
  });


});