const inquirer = require('inquirer');
const utils = require('./utils/pageGenerator');

const questions = [
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
        type: 'input',
        message: 'What is your location?',
        name: 'location',
      },
      {
        type: 'input',
        message: 'What is your story?',
        name: 'bio',
      },
      {
        type: 'input',
        message: 'What is your LinkedIn?',
        name: 'linkedIn',
      },
      {
        type: 'input',
        message: 'What is your Github?',
        name: 'gitHub',
      },
      {
        type: 'rawlist',
        message: 'What license ws this created with?',
        name: 'license',
        choices: [
            "MPL",
            "GPL",
            "Apache",
            "MIT",
            "CC",
            "BSD",
        ]
      }
  ];

inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    utils.generatePage(answers);
})