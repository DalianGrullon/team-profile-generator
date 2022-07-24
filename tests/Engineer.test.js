const Engineer = require('../lib/Engineer');

// checks if Engineer class returns an object
test("Can instantiate Engineer instance", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
});
  
// Verifies that name constructor assignment works
test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Engineer(name);
    expect(e.name).toBe(name);
});

// Verifies that id constructor assignment works
test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Engineer("Foo", testValue);
    expect(e.id).toBe(testValue);
});

// Verifies that email constructor assignment works
test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Engineer("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

// Verifies that github constructor assignment returns github
test("Can set GitHub username via constructor argument", () => {
    const testValue = 'SWE12';
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

// Verifies that getName() method returns name
test("Can get name via getName()", () => {
    const testValue = "Alice";
    const e = new Engineer(testValue);
    expect(e.getName()).toBe(testValue);
});

// Verifies that getId() method returns id
test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Engineer("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});

// Verifies that getEmail() method returns email
test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Engineer("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

// Verifies that getGitHub() method returns github
test("Can get GitHub username via getGitHub()", () => {
    const testValue = 'SWE12';
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.getGitHub()).toBe(testValue);
});

// Verifies that getRole() method returns role
test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Alice", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});