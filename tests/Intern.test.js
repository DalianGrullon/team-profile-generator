const Intern = require('../lib/Intern');

// checks if Intern class returns an object
test("Can instantiate Intern instance", () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object");
});

// Verifies that name constructor assignment works
test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Intern(name);
    expect(e.name).toBe(name);
});

// Verifies that id constructor assignment works
test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Intern("Foo", testValue);
    expect(e.id).toBe(testValue);
});

// Verifies that email constructor assignment works
test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Intern("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

// Verifies that school constructor assignment returns school
test("Can set school via constructor argument", () => {
    const testValue = 'UCF';
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

// Verifies that getName() method returns name
test("Can get name via getName()", () => {
    const testValue = "Alice";
    const e = new Intern(testValue);
    expect(e.getName()).toBe(testValue);
});

// Verifies that getId() method returns id
test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Intern("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});

// Verifies that getEmail() method returns email
test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Intern("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

// Verifies that getSchool() method returns school
test("Can get school via getSchool()", () => {
    const testValue = 'UCF';
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});

// Verifies that getRole() method returns role
test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Alice", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});