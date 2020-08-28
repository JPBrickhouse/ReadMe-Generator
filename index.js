// Importing necessary packages in order to successfully run this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Creating a function that asynchronously writes the readme file
const writeFileAsync = util.promisify(fs.writeFile);

// This array of objects contains questions that will be asked to the user
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of this project?",
        type: "string"
    },
    {
        type: "input",
        name: "description",
        message: "Describe this project with a short, succint summary:",
        type: "string"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
        type: "string"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide succinct instructions and examples for using this application:",
        type: "string"
    },
    {
        type: "list",
        name: "license",
        message: "Choose your license:",
        choices: [
            "Apache License 2.0",
            "BSD 3-Clause License",
            "GNU GPLv3 License",
            "ISC License",
            "MIT License",
            "WTFPL"
        ]
    },
    {
        type: "input",
        name: "contributors",
        message: "Who contributed to this project?",
        type: "string"
    },
    {
        type: "input",
        name: "tests",
        message: "Please describe (succinctly) any tests for this application:"
    },
    {
        type: "input",
        name: "githubUsername",
        message: "Please enter your GitHub username (not the url, just the username):",
        type: "string"
    },
    {
        type: "input",
        name: "emailAddress",
        message: "Please enter your email address:",
        // Validation code sourced from the following: https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
        validate: function (email) {
            var valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                console.log("\nPlease enter a valid email")
                return false;
            }
        }
    }

]

// This array of objects stores additional information corresponding to the licenses.
// These URLs for the license website and badges are formatted in a manner that
// will properly display them in markdown.
const licenseInfo = [
    {
        name: "Apache License 2.0",
        licenseURL: "[https://opensource.org/licenses/Apache-2.0](https://opensource.org/licenses/Apache-2.0)",
        badge: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    },
    {
        name: "BSD 3-Clause License",
        licenseURL: "[https://opensource.org/licenses/BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause)",
        badge: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    },
    {
        name: "GNU GPLv3 License",
        licenseURL: "[https://www.gnu.org/licenses/gpl-3.0](https://www.gnu.org/licenses/gpl-3.0)",
        badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    },
    {
        name: "ISC License",
        licenseURL: "[https://opensource.org/licenses/ISC](https://opensource.org/licenses/ISC)",
        badge: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
    },
    {
        name: "MIT License",
        licenseURL: "[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)",
        badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    },
    {
        name: "WTFPL",
        licenseURL: "[http://www.wtfpl.net/about/](http://www.wtfpl.net/about/)",
        badge: "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
    },
]


// function to write README file
// All of the content located between the `` characters gets returned
function writeReadMeContent(answers) {

    return `
# ${answers.projectTitle}

${answers.badge}

## DESCRIPTION
${answers.description}

## TABLE OF CONTENTS
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
## INSTALLATION
${answers.installation}

## USAGE
${answers.usage}

## LICENSE
License: ${answers.license}<br>
${answers.licenseURL}

## CONTRIBUTING
${answers.contributors}

## TESTS
${answers.tests}

## QUESTIONS
- Feel free to visit the following GitHub for more information:
[https://github.com/${answers.githubUsername}](https://github.com/${answers.githubUsername})
- For further questions, please reach out to the following email address:
[${answers.emailAddress}](${answers.emailAddress})
`
}


// function to initialize program
async function init() {
    try {
        // Running inquirer.prompt on the questions array of objects
        // Await the results and then store as the constant answers
        const answers = await inquirer.prompt(questions);

        // Creating a constant, corresponding to the licenseSelected by the user
        const licenseSelected = answers.license;

        // Initializing empty variables for use momentarily
        var licenseURLvariable = ""
        var badgeVariable = ""

        // Using forEach go into licenseInfo, an array of objects
        // Find the name that matches, and then store the corresponding badge and licenseURL
        licenseInfo.forEach(object => {
            if (object.name === licenseSelected) {
                licenseURLvariable = object.licenseURL;
                badgeVariable = object.badge;
            }
        })

        // Adding keys and values to the answers object
        answers.licenseURL = licenseURLvariable;
        answers.badge = badgeVariable;

        // Running the writeReadMe function and passing the answers object
        // The returned content is stored as readMeContent
        const readMeContent = writeReadMeContent(answers);

        // Writing the GeneratedREADME file and console logging upon success
        await writeFileAsync("GeneratedREADME.md", readMeContent);
        console.log("Successfully wrote to GeneratedREADME.md")
    }
    catch (err) {
        // catching and console logging an error
        console.log(err);
    }
}

// function call to initialize program
init();
