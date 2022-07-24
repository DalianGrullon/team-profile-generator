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

// Declares an empty array which will contain the team member objects upon answering of prompts
let team = [];

// Destructures questions for manager, engineer, and intern from questions module
const {managerQuestions, engineerQuestions, internQuestions} = questions;

function init() {
    function createManager() {
        inquirer
            .prompt(managerQuestions)
            .then(res => {
                // creates a new Manager using its class and the responses from prompt
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
                    // only displays if the first prompt is answered with yes
                    when(answers) {
                        return answers.continue;
                    }
                }
            ])
            .then(choice => {
                // checks if an engineer or intern as been selected, otherwise, builds team
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
  
    function addEngineer() {
        inquirer
            .prompt(engineerQuestions)
            .then(res => {
                // creates a new Engineer using its class and the responses from prompt
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
            .prompt(internQuestions)
            .then(res => {
                // creates a new Intern using its class and the responses from prompt
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
  
    function buildTeam() {
        generateHTML(team);
    }
    
    createManager();
}

init();