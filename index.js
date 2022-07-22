// local modules
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// node core and npm packages
const inquirer = require('inquirer');
const path = require('path');
// template helper code
const questions = require('./helpers/questions');
const generateHTML= require('./src/html');

// set up an empty array for the Team Members
let team = [];

function init() {
    function createManager() {
        inquirer
            .prompt(questions.manager)
            .then(res => {
                const manager = new Manager(
                    res.name, 
                    res.id, 
                    res.email, 
                    res.officeNumber
                );
                team.push(manager);
                createTeam();
            });
    }
  
    // function for DETERMINING TYPE OF EMPLOYEE //////////////////
    function createTeam() {
        inquirer
            .prompt([
                {
                    name: 'continue',
                    type: 'confirm',
                    message: 'Would you like to add a new team member?',
                },
                {
                    name: 'type',
                    type: 'list',
                    message: 'Which kind of team member would you like to add?',
                    choices: ['Engineer', 'Intern'],
                    when(answers) {
                        return answers.continue;
                    }
                }
            ])
            .then(choice => {
                if (choice.type) {
                    if (choice.type === 'Engineer') {
                        addEngineer();
                    } else  {
                        addIntern();
                    }
                } else {
                    buildTeam();
                }
            });
    }
  
    // function for ADDING A MEMBER /////////////////
    function addEngineer() {
        inquirer
            .prompt(questions.engineer)
            .then(res => {
                const engineer = new Engineer(
                    res.name,
                    res.id,
                    res.email,
                    res.github
                );
                team.push(engineer);
                createTeam();
            });
    }
    
    function addIntern() {
        inquirer
            .prompt(questions.intern)
            .then(res => {
                const intern = new Intern(
                    res.name,
                    res.id,
                    res.email,
                    res.school
                );
                team.push(intern);
                createTeam();
            });
    }
  
    // function for BUIDING THE TEAM //////////////////
    function buildTeam() {
        generateHTML(team);
    }
  
    // last thing you'll want to do inside of this initializing function is call your function for creating a manager, so that it's the first question the user is asked
  
    createManager();
}

init();