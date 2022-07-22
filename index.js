// local modules
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// node core and npm packages
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
// template helper code
const questions = require('./src/questions');

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
                // createTeam();
            });
    }
  
    // function for DETERMINING TYPE OF EMPLOYEE //////////////////
    function createTeam() {
        // use inquirer
        // and prompt to ask questions - such as what type of employee they would like to add
  
        // then, based on their choice, run the function associated with adding that employee type
        // .then((choice) => {
        //     // conditional that runs function for employee type that the user selected
        //     // if they choose Intern, run addIntern function
        //     // if they no longer want to add members, you'll need to run the function that actually builds the team (creates the file, etc)
        // })
    }
  
    // function for ADDING A MEMBER /////////////////
    function addIntern() {
        // use inquirer
        // and prompt to ask questions
        // take the answers, create a new instance of Intern, and add those answers to that new Intern
        // push this new member into you team array
    }
    // create a seperate function for each member type
  
    // function for BUIDING THE TEAM //////////////////
    function buildTeam() {
        // creating the file, adding your team to it
        // probably call a function, passing in your team members array - send it to another js file 
    }
  
    // last thing you'll want to do inside of this initializing function is call your function for creating a manager, so that it's the first question the user is asked
  
    createManager();
}

init();