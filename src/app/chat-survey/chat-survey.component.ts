import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-chat-survey',
  templateUrl: './chat-survey.component.html',
  styleUrls: ['./chat-survey.component.scss'],
})
export class ChatSurveyComponent implements OnInit {

  constructor() { }
  listRate = [1, 2, 3, 4, 5, 6, 7];
  //id - message
  @Input('message') message: any;
  @ViewChild('outputVote') outputVote: any;
  @ViewChildren('surveyCheckbox') checkboxitem: any;
  @ViewChildren('rateItem') listrateItem: any;


  //list step survey form
  @ViewChild('question2a') question2a?: any;
  @ViewChild('question2b') question2b?: any;
  @ViewChild('question3a') question3a?: any;
  @ViewChild('question3b') question3b?: any;
  question2aValue = '';
  question2bValue = '';
  question3aValue = '';
  question3bValue = '';


  stringVote = '';
  stepKeySurvey2 = '';
  stepKeySurvey3 = '';
  isStepSurvey3b = false;
  isStepSurvey4 = false;
  SurveyComment = ''
  datacheckbox: any = [];
  isSurveyComment = false;
  surveyStatusCheckbox: any = [];

  //number item status
  numberItemStatus = 0;

  isStep2Toggle = false;
  ngOnInit(): void {
    this.listRate = this.listRate.reverse();
    this.datacheckbox = [{ id: '1', name: 'Thời gian phản hồi chậm' },
    { id: '2', name: 'Yêu cầu chưa được xử lý' },
    { id: '3', name: 'Cung cấp thông tin không chính xác' },
    { id: '4', name: 'Ý kiến khác' }]
  }
  nextStep2() {
    this.isStep2Toggle = true;
    this.toggleVoteFunction(this.numberItemStatus);
  }
  actionVote(voteNumber: number, event: any) {
    this.question2aValue = '';
    this.question2bValue = '';
    this.question3aValue = '';
    this.question3bValue = '';
    this.isSurveyComment = false;


    this.isStepSurvey3b = false;
    this.stepKeySurvey3 = '';
    this.stepKeySurvey2 = '';
    this.isStepSurvey4 = false;
    this.isStepSurvey3b = false;
    console.log(voteNumber);
    // if (1 <= voteNumber && voteNumber <= 3) {
    //   this.stringVote = "Không đồng ý"
    //   this.stepKeySurvey2 = '2a'
    //   this.isStepSurvey4 = false;
    // }
    // else if (voteNumber === 4) {
    //   this.stringVote = "Không ý kiến"
    //   this.stepKeySurvey2 = '2b'
    //   this.isStepSurvey4 = false;
    // } else {
    //   this.stringVote = "đồng ý"
    //   this.stepKeySurvey2 = '2b'
    //   this.isStepSurvey4 = false;

    // }


    console.log('element : ', event.target.className);

    // debugger
    // if (event.target.className === 'item-rate' && (1 <= voteNumber && voteNumber <= 3)) {
    //   event.target.className = 'item-rate-clicked-case1';
    //   this.stringVote = "Không đồng ý"
    //   this.stepKeySurvey2 = '2a'
    //   this.isStepSurvey4 = false;

    // } else if (event.target.className === 'item-rate' && voteNumber === 4) {
    //   event.target.className = 'item-rate-clicked-case2';
    //   this.stringVote = "Không ý kiến"
    //   this.stepKeySurvey2 = '2b'
    //   this.isStepSurvey4 = false;

    // } else if (event.target.className === 'item-rate') {
    //   event.target.className = 'item-rate-clicked-case3';
    //   this.stringVote = "đồng ý"
    //   this.stepKeySurvey2 = '2b'
    //   this.isStepSurvey4 = false;

    // } else {
    //   event.target.className = 'item-rate';
    //   this.stepKeySurvey2 = ''
    //   this.stepKeySurvey3 = ''
    //   this.isStepSurvey3b = false;
    //   this.isStepSurvey4 = false;
    // }

    this.listrateItem.forEach((element: ElementRef) => {
      const elment_number = element.nativeElement.textContent;
      const element_child = element.nativeElement;

      if (elment_number.toString() === voteNumber.toString()) {
        if (element_child.className === 'item-rate') {
          if (1 <= voteNumber && voteNumber <= 3) {
            element_child.className = 'item-rate-clicked-case1';
            this.stringVote = "Không đồng ý"
          } else if (voteNumber === 4) {
            this.stringVote = "Không ý kiến"
            element_child.className = 'item-rate-clicked-case2';
          } else {
            this.stringVote = "đồng ý"
            element_child.className = 'item-rate-clicked-case3';
          }
          // this.toggleVoteFunction(voteNumber)
          this.numberItemStatus = voteNumber;
        } else {
          event.target.className = 'item-rate';
          this.stepKeySurvey2 = ''
          this.stepKeySurvey3 = ''
          this.isStepSurvey3b = false;
          this.isStepSurvey4 = false;
          this.stringVote = '';
          this.numberItemStatus = 0;
        }
      } else {
        element_child.className = 'item-rate';
      }

    });

    this.isStep2Toggle = false;
  }
  toggleVoteFunction(voteNumber: number) {
    if (1 <= voteNumber && voteNumber <= 3) {

      this.stepKeySurvey2 = '2a'
      this.isStepSurvey4 = false;
    }
    else if (voteNumber === 4) {

      this.stepKeySurvey2 = '2b'
      this.isStepSurvey4 = false;
    } else {

      this.stepKeySurvey2 = '2b'
      this.isStepSurvey4 = false;

    }
  }
  sendSurvey() {
    console.log('send survey ! ', this.isStepSurvey3b);
    console.log('send survey ! ', this.stepKeySurvey2);



    if (this.isStepSurvey3b === true) {
      this.question3bValue = this.question3b.nativeElement.querySelector('textarea').value

    }
    if (this.stepKeySurvey2 === '2b') {
      this.question2bValue = this.question2b.nativeElement.querySelector('textarea').value

    }
    if (this.stepKeySurvey3 === '3a') {
      this.question3aValue = this.question3a.nativeElement.querySelector('textarea').value

    }

    this.isStepSurvey3b = false;
    this.stepKeySurvey3 = '';
    this.stepKeySurvey2 = '';
    this.isStepSurvey4 = true;



    //in ra man hinh form value ?
    console.log('survey id  : ', this.message);
    console.log('3a', this.question3bValue);
    console.log('2b', this.question2bValue);
    console.log('3b', this.question3aValue);
    console.log('checkbox : ', this.surveyStatusCheckbox);
    console.log('rate', this.numberItemStatus);
    console.log('comment', this.question2aValue);
  }
  outSurvey() {
    console.log('out survey ! ');
  }
  // checked(event: any, numberchecked?: number): void {

  //   const status_step = checked;
  //   const number_step = number;
  //   debugger;
  //   if (number === '1' && checked === true) {
  //     this.stepKeySurvey3 = '3a'
  //     console.log(number);
  //   } else
  //     if (number === '2' && checked === true) {
  //       this.stepKeySurvey3 = '3a'
  //       console.log(number);
  //     } else
  //       if (number === '3' && checked === true) {
  //         this.stepKeySurvey3 = '3a'
  //         console.log(number);
  //       } else {
  //         this.stepKeySurvey3 = ''
  //         console.log(number);
  //       }
  //   if (number === '4' && checked === true) {
  //     this.isSurveyComment = true;
  //   } else {
  //     this.isSurveyComment = false;
  //   }
  // }
  checked() {


    let checkboxAreaSurveyText;

    this.stepKeySurvey3 = '';
    const datacheckbox = this.checkboxitem;
    datacheckbox.forEach((element: any) => {
      // console.log(element.nativeElement);
      // const child_element = element.nativeElement;
      // console.log(child_element.checked);

      if (element.nativeElement.checked === true && element.nativeElement.value !== '4') {
        this.stepKeySurvey3 = '3a';
      }


      // this.checkTotalFalse(element.nativeElement)

    });
    if (this.isSurveyComment === true) {
      this.isStepSurvey3b = true;
      const comment_textarea_survey = this.question2a.nativeElement.querySelector('textarea');
      this.question2aValue = comment_textarea_survey.value;



    } else {
      this.isStepSurvey3b = false;
      this.question2aValue = '';
    }
    let i = 0;
    datacheckbox.forEach((element: any) => {
      i++;
      if (element.nativeElement.checked === true) {
        switch (i) {
          case 1:
            this.surveyStatusCheckbox.push('Thời gian phản hồi chậm');
            break;
          case 2:
            this.surveyStatusCheckbox.push('Yêu cầu chưa được xử lý');
            break;
          case 3:
            this.surveyStatusCheckbox.push('Cung cấp thông tin không chính xác');
            break;
          case 4:
            this.surveyStatusCheckbox.push('Ý kiến khác');
            break;
          default:
            this.surveyStatusCheckbox = [];
            break;
        }
      }
    })

    console.log(this.question2aValue);
    console.log(this.surveyStatusCheckbox);
  }



  checkTotalFalse() {
    // console.log(element.target.checked);

    // const number = element.target.value;
    // const checked = element.target.checked;
    // if (number === "4" && checked === true) {
    //   this.isSurveyComment = true;
    // } else {
    //   this.isSurveyComment = false;
    // }




    const datacheckbox = this.checkboxitem;
    let i = 0;
    datacheckbox.forEach((element: any) => {
      i++;
      const element_child = element.nativeElement;
      if (i === 4) {
        if (element_child.checked === true) {
          this.isSurveyComment = true;
        } else {
          this.isSurveyComment = false;
        }
      }
    })
  }

  nextStep3b(): void {
    this.isStepSurvey3b = true;
  }
}
