import * as chalk from 'chalk';
import resume from './resume.json';

export const response = chalk.default.bold.green;

export const resumePrompts = {
  type: "list",
  name: "resumeOptions",
  message: "What do you want to know about me?",
  choices: [...Object.keys(resume), "Exit"]
};

// export interface IAnswer {
//   resumeOptions: string,
// }