// helper function that verifies user input is a number from 0-9
function numVerify(test) {
    return test.match(/[0-9]/) ? true : 'Must be numerical entry!';
}

// helper function that verifies user input contains an @ symbol
function emailVerify(test) {
    return test.match('@') ? true : 'Must be a valid email!';
}

// An array of questions to be used for Manager inquirer prompt
let managerQuestions = [
    {
        name: 'name',
        type: 'input',
        message: 'As the manager of the team, what is your name?'
    },
    {
        name: 'id',
        type: 'input',
        message: 'Please enter your ID.',
        validate: numVerify
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email?',
        validate: emailVerify
    },
    {
        name: 'officeNumber',
        type: 'input',
        message: 'What is your office number?',
        validate: numVerify
    },
]

// An array of questions to be used for Engineer inquirer prompt
let engineerQuestions = [
    {
        name: 'name',
        type: 'input',
        message: 'What is the name of this Engineer?'
    },
    {
        name: 'id',
        type: 'input',
        message: `What is their ID?`,
        validate: numVerify
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is their email?',
        validate: emailVerify
    },
    {
        name: 'github',
        type: 'input',
        message: 'What is their GitHub username?'
    },
]

// An array of questions to be used for Intern inquirer prompt
let internQuestions = [
    {
        name: 'name',
        type: 'input',
        message: 'What is the name of this Intern?'
    },
    {
        name: 'id',
        type: 'input',
        message: `What is their ID?`,
        validate: numVerify
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is their email?',
        validate: emailVerify
    },
    {
        name: 'school',
        type: 'input',
        message: 'What is the name of their school?'
    },
]

module.exports = {
    managerQuestions,
    engineerQuestions,
    internQuestions
};