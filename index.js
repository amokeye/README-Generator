const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generate = require('./utils/generateMarkdown');

// array of questions for user
const questions = [ 

    {
        name: 'proj_title',
        type: 'input',
        message: 'What is the title of the project?',
    },
    
    {
        name: 'proj_description',
        type: 'input',
        message: 'Please enter a description for the project.',
    },

    {
        name: 'proj_install',
        type: 'input',
        message: 'Please enter project installation instructions.',
    },

    {
        name: 'proj_usageInfo',
        type: 'input',
        message: 'Please enter usage information for the project.',
    },

    {
        name: 'proj_license',
        type: 'list',
        message: 'Please choose a license for this project.',
        choices: [
            'MIT License',
            'Apache License 2.0',
            'MPL 2.0',
            'EPL 2.0'
        ]
    },

    {
        name: 'proj_contribution',
        type: 'input',
        message: 'What are the guidelines for making contributions?',
    },

    {
        name: 'proj_test',
        type: 'input',
        message: 'Please enter instructions on how to run tests for the project.',
    },

    {
        name: 'proj_questions1',
        type: 'input',
        message: 'Please enter your GitHub username.',
    },

    {
        name: 'proj_questions2',
        type: 'input',
        message: 'Please enter your email.',
    },

];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)

        .then(response => {

        writeToFile('README.md', generate(response));

        })

}


// function call to initialize program
init();
