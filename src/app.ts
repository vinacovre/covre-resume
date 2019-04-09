import { prompt } from 'inquirer';

import { response, resumePrompts } from './config';
import resume from './resume.json';

class App {
  constructor() {
    console.log("Hello, My name is Vinicius Covre and welcome to my resume");
  }

  run() {
    prompt(resumePrompts)
      .then((answer: any) => {
        const option = answer.resumeOptions;
        if (option === "Exit")
          return;

        this.displayOptions(option, resume);

        prompt({
          type: "list",
          name: "exitBack",
          message: "Go back or Exit?",
          choices: ["Back", "Exit"]
        })
          .then((choice: any) => {
            if (choice.exitBack !== "Back")
              return;
            this.run();
          });
      });
  }

  private displayOptions(option: string, resume: any): void {
    console.log(response("--------------------------------------"));
    resume[`${option}`].forEach((info: any) => console.log(response("|   => " + info)));
    console.log(response("--------------------------------------"));
    // console.log(resume[`${option}`]);
  }
}

new App().run();
