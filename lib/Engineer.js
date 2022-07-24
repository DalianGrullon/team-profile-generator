const Employee = require('./Employee');

/* 
Creates Engineer class that inherits all of Employee class with changes to the role returned 
and adds github retrieval getter function
*/
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return 'Engineer';
    }

    getGitHub() {
        return this.github;
    }
}

module.exports = Engineer;