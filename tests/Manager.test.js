const Manager = require('../lib/Manager');

// checks if Manager class returns an object
test("Can instantiate Manager instance", () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object");
});

// Verifies that name constructor assignment works
test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Manager(name);
    expect(e.name).toBe(name);
});

// Verifies that id constructor assignment works
test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Foo", testValue);
    expect(e.id).toBe(testValue);
});

// Verifies that email constructor assignment works
test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Manager("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

// Verifies that office number constructor assignment returns office number
test("Can set office number via constructor argument", () => {
    const testValue = 12346643;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

// Verifies that getName() method returns name
test("Can get name via getName()", () => {
    const testValue = "Alice";
    const e = new Manager(testValue);
    expect(e.getName()).toBe(testValue);
});

// Verifies that getId() method returns id
test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Manager("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});

// Verifies that getEmail() method returns email
test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Manager("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

// Verifies that getOfficeNumber() method returns office number
test("Can get office number via getOfficeNumber()", () => {
    const testValue = 12346643;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

// Verifies that getRole() method returns role
test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Alice", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});