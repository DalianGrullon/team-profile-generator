const Employee = require('./Employee');

/* 
Creates Intern class that inherits all of Employee class with changes to the role returned 
and adds school retrieval getter function
*/
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return 'Intern';
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;