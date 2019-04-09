"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const chalk = tslib_1.__importStar(require("chalk"));
const resume_json_1 = tslib_1.__importDefault(require("../resume.json"));
exports.response = chalk.default.bold.green;
exports.resumePrompts = {
    type: "list",
    name: "resumeOptions",
    message: "What do you want to know about me?",
    choices: [...Object.keys(resume_json_1.default), "Exit"]
};
// export interface IAnswer {
//   resumeOptions: string,
// }
