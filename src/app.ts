import { prompt } from 'inquirer';
import { welcomeMsg, mainMenu, backOrExitMenu, clearBlue, separatorTop, separatorBottom } from './config';
import resume from './resume.json';

class App {
  constructor() {
    console.log(welcomeMsg);
  }

  run() {
    prompt(mainMenu)
      .then((answer: any) => {
        const option = answer.resumeOptions;

        if (this.shouldExit(option))
          return;

        this.displayResumeChoice(option, resume);
        this.displayBackOrExitMenu();
      });
  }

  private displayResumeChoice(option: string, resume: any): void {
    console.log(separatorTop);
    resume[`${option}`].forEach(this.desplayInfo);
  }

  private desplayInfo(info: any): void {
    console.log("");
    for (let key in info) {
      console.log(clearBlue(` ${key}:\t${info[key]}`));
    }
    console.log(`${separatorBottom}`);
  }

  private displayBackOrExitMenu(): void {
    console.log("");
    prompt(backOrExitMenu)
      .then((answer: any) => {
        if (this.shouldExit(answer.backOrExitMenu))
          return;
        this.run();
      });
  }

  private shouldExit(choice: string): boolean {
    return choice === "Exit";
  }
}

new App().run();
