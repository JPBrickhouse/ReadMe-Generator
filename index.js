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
    }
]


// function to write README file
function writeReadMe(data) {


    // TITLE


    // DESCRIPTION


    // TABLE OF CONTENTS


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
