import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-chat-survey',
  templateUrl: './chat-survey.component.html',
  styleUrls: ['./chat-survey.component.scss'],
})
export class ChatSurveyComponent implements OnInit {

  constructor() { }
  listRate = [1, 2, 3, 4, 5, 6, 7];
  @Input('message') message: any;
  @ViewChild('outputVote') outputVote: any;
  stringVote = '';
  stepKeySurvey = ''
  isStepSurvey4 = false;
  SurveyComment = ''
  isSurveyComment = false;
  surveyStatusCheckbox = [];
  ngOnInit(): void {
    this.listRate = this.listRate.reverse();
  }
  actionVote(voteNumber: number) {

    console.log(voteNumber);
    if (1 >= voteNumber && voteNumber <= 3) {
      this.stringVote = "Không đồng ý"
      this.stepKeySurvey = '2a'
      this.isStepSurvey4 = false;
    }
    else if (voteNumber === 4) {
      this.stringVote = "Không ý kiến"
      this.stepKeySurvey = '2b'
      this.isStepSurvey4 = false;
    } else {
      this.stringVote = "đồng ý"
      this.stepKeySurvey = '2b'
      this.isStepSurvey4 = false;
    }
  }
  sendSurvey() {
    console.log('send survey ! ', this.stepKeySurvey);
    this.isStepSurvey4 = true;
  }
  outSurvey() {
    console.log('out survey ! ');
  }
  checked(event: any, numberchecked?: number): void {
    const status_step = event.target.checked;
    const number_step = event.target.value;
    if (event.target.value === 1 && event.target.checked === 'true') {
      this.stepKeySurvey === '3a'
      console.log(event.target.value);
    } else
      if (event.target.value === 2 && event.target.checked === 'true') {
        this.stepKeySurvey = '3a'
        console.log(event.target.value);
      } else
        if (event.target.value === 3 && event.target.checked === 'true') {
          this.stepKeySurvey = '3a'
          console.log(event.target.value);
        } else {
          this.stepKeySurvey = ''
          console.log(event.target.value);
        }
    if (event.target.value === 4 && event.target.checked === 'true') {
      this.isSurveyComment = true;
    } else {
      this.isSurveyComment = false;
    }
  }
}
