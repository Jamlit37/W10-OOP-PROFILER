const Intern = require("../lib/Intern");

describe('Intern', () => {
  it('should create an engineer object', () => {
    const intern = new Intern("James", 123, "james@test.com", "monash")
    expect(intern.name).toEqual("James")
    expect(intern.id).toEqual(123)
    expect(intern.email).toEqual("james@test.com")
    expect(intern.school).toEqual("monash")
 
  });

  it('should get intern name', () => {
    const intern = new Intern("James", 123, "james@test.com", "monash")

    expect(intern.name).toEqual("James")
  });

  it('should get intern id', () => {
    const intern = new Intern("James", 123, "james@test.com", "monash")

    expect(intern.id).toEqual(123)
  });

  it('should get intern email', () => {
    const intern = new Intern("James", 123, "james@test.com", "monash")

    expect(intern.email).toEqual("james@test.com")
  });

  it('should get intern school', () => {
    const intern = new Intern("James", 123, "james@test.com", "monash")

    expect(intern.school).toEqual("monash")
  });

});