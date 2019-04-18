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

        if (option === "Exit")
          return;

        this.displayResumeChoice(option, resume);
        this.displayBackOrExitMenu();
      });
  }

  private displayResumeChoice(option: string, resume: any): void {
    console.log(separatorTop);
    resume[`${option}`].forEach(this.desplayInfo);
    console.log(separatorBottom);
  }

  private desplayInfo(info: any) {
    console.log("");
    for (let key in info) {
      console.log(clearBlue(` ${key}:\t${info[key]}`));
    }
    console.log("");
  }

  private displayBackOrExitMenu(): void {
    prompt(backOrExitMenu)
      .then((choice: any) => {
        if (choice.exitBack !== "Back")
          return;
        this.run();
      });
  }
}

new App().run();
