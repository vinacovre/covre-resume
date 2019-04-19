import * as chalk from 'chalk';
import resume from './resume.json';
import { Separator } from 'inquirer';

export const clearBlue = chalk.default.bold.rgb(165, 209, 243);
export const blue = chalk.default.bold.rgb(97, 148, 188);

export const welcomeMsg = `${new Separator()}  ${blue("Résumé | Vinicius Covre")}   ${new Separator()}`;

export const mainMenu = {
  type: "list",
  name: "resumeOptions",
  message: "What do you want to know about me?",
  choices: [...Object.keys(resume), "Exit"]
};

const separator = new Separator();
export const separatorTop = "\n" + `${separator}`.repeat(4);
export const separatorBottom = `\n${separator}`;

export const backOrExitMenu = {
  type: "list",
  name: "backOrExitMenu",
  message: "Chose an option",
  choices: ["Back", "Exit"]
};
