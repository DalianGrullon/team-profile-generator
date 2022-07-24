const Employee = require('./Employee');

/* 
Creates Manager class that inherits all of Employee class with changes to the role returned 
and adds office number retrieval getter function
*/
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;