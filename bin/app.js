"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inquirer_1 = require("inquirer");
const config_1 = require("./config");
const resume_json_1 = tslib_1.__importDefault(require("./resume.json"));
class App {
    constructor() {
        console.log(config_1.welcomeMsg);
    }
    run() {
        inquirer_1.prompt(config_1.mainMenu)
            .then((answer) => {
            const option = answer.resumeOptions;
            if (this.shouldExit(option))
                return;
            this.displayResumeChoice(option, resume_json_1.default);
            this.displayBackOrExitMenu();
        });
    }
    displayResumeChoice(option, resume) {
        console.log(config_1.separatorTop);
        resume[`${option}`].forEach(this.desplayInfo);
    }
    desplayInfo(info) {
        console.log("");
        for (let key in info) {
            console.log(config_1.clearBlue(` ${key}:\t${info[key]}`));
        }
        console.log(`${config_1.separatorBottom}`);
    }
    displayBackOrExitMenu() {
        console.log("");
        inquirer_1.prompt(config_1.backOrExitMenu)
            .then((answer) => {
            if (this.shouldExit(answer.backOrExitMenu))
                return;
            this.run();
        });
    }
    shouldExit(choice) {
        return choice === "Exit";
    }
}
new App().run();
