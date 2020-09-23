var inquirer = require("inquirer");
var fs = require('fs');

// series of questions from command line
inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "Title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project:"
    },
    {
        type: "input",
        name: "installation",
        message: "How do you installation:"
    },
    {
        type: "input",
        name: "usage",
        message: "Now state usage information:"
    },
    {
        type: "input",
        name: "contributing",
        message: "Fill out your 'Contributing' section:"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license:",
        choices: [
            "MIT",
            "Mozilla Public License 2.0",
            "Apache License 2.0",
            "Boost Software License 1.0",
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Unlicense"
        ]
    },
    {
        type: "input",
        name: "test",
        message: "How do you test your application?"
    }
]).then(function(data) {

// generates markdown for readme from user's input
const generateReadme =`
# ${data.title}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Test](#test)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## License
${data.license}
## Tests
${data.test}
## Questions
Contact:
Github: [${data.username}](https://github.com/${data.username})
Email: [${data.email}]
`;

    // generates a readme file
    fs.writeFile("README.md", generateReadme, function(err) {


        if (err) {
            return console.log(err);
        }

        console.log("Your README has been generated!")

        
    });

});


