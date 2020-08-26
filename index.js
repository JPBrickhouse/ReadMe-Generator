const inquirer = require("inquirer");
// const fs = require("fs");
// const util = require("util");

// const writeFileAsync = util.promisify(fs.writeFile);


// array of questions for user
const nonRecursiveQuestions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the Title of this project?",
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
    }
]

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
function writeReadMe(data) {


    // TITLE


    // DESCRIPTION


    // TABLE OF CONTENTS

    // UNCOMMENT - This content will be in quotes as part of the overall assembled ReadMe
    // * [Installation](#installation)
    // * [Usage](#usage)
    // * [License](#license)
    // * [Contributing](#contributing)
    // * [Tests](#tests)
    // * [Questions](#questions)


    // INSTALLATION



    // USAGE



    // LICENSE



    // CONTRIBUTING



    // TESTS



    // QUESTIONS


}


// function to initialize program
async function init() {
    try {

        const answers = await inquirer.prompt(nonRecursiveQuestions);

        console.log(answers);

        // const readMeContent = writeReadMe(answers);

        // await writeFileAsync("README.md", readMeContent);

        // console.log("Successfully wrote to README.md")
    }
    catch (err) {
        console.log(err);
    }
}

// function call to initialize program
init();
