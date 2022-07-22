let managerQuestions = [
    {
        name: 'name',
        type: 'input',
        message: 'Hello and welcome to Team Profile Generator. As the manager of the team, what is your name?'
    },
    {
        name: 'id',
        type: 'input',
        message: 'Please enter your ID.'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email?'
    },
    {
        name: 'officeNumber',
        type: 'input',
        message: 'What is your office number?'
    },
]

let engineerQuestions = [
    {
        name: 'name',
        type: 'input',
        message: 'What is the name of this Engineer?'
    },
    {
        name: 'id',
        type: 'input',
        message: `What is their ID?`
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is their email?'
    },
    {
        name: 'github',
        type: 'input',
        message: 'What is their GitHub username?'
    },
]

let internQuestions = [
    {
        name: 'name',
        type: 'input',
        message: 'What is the name of this Intern?'
    },
    {
        name: 'id',
        type: 'input',
        message: `What is their ID?`
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is their email?'
    },
    {
        name: 'school',
        type: 'input',
        message: 'What is the name of their school?'
    },
]

module.exports = {
    manager: managerQuestions,
    engineer: engineerQuestions,
    intern: internQuestions
};