"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inquirer_1 = require("inquirer");
const config_1 = require("./config");
const resume_json_1 = tslib_1.__importDefault(require("../resume.json"));
class App {
    constructor() {
        console.log("Hello, My name is Vinicius Covre and welcome to my resume");
    }
    run() {
        inquirer_1.prompt(config_1.resumePrompts)
            .then((answer) => {
            const option = answer.resumeOptions;
            if (option === "Exit")
                return;
            this.displayOptions(option, resume_json_1.default);
            inquirer_1.prompt({
                type: "list",
                name: "exitBack",
                message: "Go back or Exit?",
                choices: ["Back", "Exit"]
            })
                .then((choice) => {
                if (choice.exitBack !== "Back")
                    return;
                this.run();
            });
        });
    }
    displayOptions(option, resume) {
        console.log(config_1.response("--------------------------------------"));
        resume[`${option}`].forEach((info) => console.log(config_1.response("|   => " + info)));
        console.log(config_1.response("--------------------------------------"));
        // console.log(resume[`${option}`]);
    }
}
new App().run();
