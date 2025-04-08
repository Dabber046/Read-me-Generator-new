const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage information:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Contributing guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Test instructions:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Your email address:',
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('✅ README.md generated successfully!')
  );
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
  });
}

init();
