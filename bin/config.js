"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const chalk = tslib_1.__importStar(require("chalk"));
const resume_json_1 = tslib_1.__importDefault(require("./resume.json"));
const inquirer_1 = require("inquirer");
exports.clearBlue = chalk.default.bold.rgb(165, 209, 243);
exports.blue = chalk.default.bold.rgb(97, 148, 188);
exports.welcomeMsg = `${new inquirer_1.Separator()}  ${exports.blue("Résumé | Vinicius Covre")}   ${new inquirer_1.Separator()}`;
exports.mainMenu = {
    type: "list",
    name: "resumeOptions",
    message: "What do you want to know about me?",
    choices: [...Object.keys(resume_json_1.default), "Exit"]
};
const separator = new inquirer_1.Separator();
exports.separatorTop = "\n" + `${separator}`.repeat(4);
exports.separatorBottom = `${separator}`.repeat(4) + "\n";
exports.backOrExitMenu = {
    type: "list",
    name: "exitBack",
    message: "Go back | Exit:",
    choices: ["Back", "Exit"]
};
