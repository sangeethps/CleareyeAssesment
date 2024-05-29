import { Component } from '@angular/core';
import { QUESTIONS } from "./models/questions";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent {

  questions: any[] = JSON.parse(JSON.stringify(QUESTIONS));
  correctAnsMark = 10;

  constructor() {
    this.clearSelectedOptions();
  }

  clearSelectedOptions() {
    this.questions.map((ques: any) => {
      ques['selectedOption'] = null;
      return ques;
    })
  }

  onSubmit() {
    let correctAnswer = 0
    let inValidQuestions: any[] = [];
    this.questions.forEach((ques: any, index: number) => {
      if (!ques['selectedOption']) {
        inValidQuestions.push(index + 1);
        return;
      }
      if (ques['selectedOption'] == ques['answer']) {
        correctAnswer += 1;
      }
    });

    if (inValidQuestions.length) {
      alert('All questions are mandatory. Please complete question No.' + inValidQuestions.join(',').toString());
      return;
    }

    if (correctAnswer / this.questions.length >= 0.6) {
      alert(`Success, you have scored ${correctAnswer * this.correctAnsMark}/${this.questions.length * this.correctAnsMark}`)
    } else {
      const action = confirm('Failed, please try again');
      if (action) {
        this.questions = JSON.parse(JSON.stringify(QUESTIONS));
      }
    }
  }


}
