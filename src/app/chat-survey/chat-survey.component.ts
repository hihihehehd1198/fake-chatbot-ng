import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';

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
  @ViewChildren('surveyCheckbox') checkboxitem: any;
  @ViewChildren('rateItem') listrateItem: any;
  stringVote = '';
  stepKeySurvey2 = '';
  stepKeySurvey3 = '';
  isStepSurvey3b = false;
  isStepSurvey4 = false;
  SurveyComment = ''
  datacheckbox: any = [];
  isSurveyComment = false;
  surveyStatusCheckbox = [];
  ngOnInit(): void {
    this.listRate = this.listRate.reverse();
    this.datacheckbox = [{ id: '1', name: 'Thời gian phản hồi chậm' },
    { id: '2', name: 'Yêu cầu chưa được xử lý' },
    { id: '3', name: 'Cung cấp thông tin không chính xác' },
    { id: '4', name: 'Ý kiến khác' }]
  }
  actionVote(voteNumber: number, event: any) {
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
          } else if (voteNumber === 4) {
            element_child.className = 'item-rate-clicked-case2';
          } else {
            element_child.className = 'item-rate-clicked-case3';
          }
          this.toggleVoteFunction(voteNumber)
        } else {
          event.target.className = 'item-rate';
          this.stepKeySurvey2 = ''
          this.stepKeySurvey3 = ''
          this.isStepSurvey3b = false;
          this.isStepSurvey4 = false;
        }
      } else {
        element_child.className = 'item-rate';
      }
    });


  }
  toggleVoteFunction(voteNumber: number) {
    if (1 <= voteNumber && voteNumber <= 3) {
      this.stringVote = "Không đồng ý"
      this.stepKeySurvey2 = '2a'
      this.isStepSurvey4 = false;
    }
    else if (voteNumber === 4) {
      this.stringVote = "Không ý kiến"
      this.stepKeySurvey2 = '2b'
      this.isStepSurvey4 = false;
    } else {
      this.stringVote = "đồng ý"
      this.stepKeySurvey2 = '2b'
      this.isStepSurvey4 = false;

    }
  }
  sendSurvey() {
    console.log('send survey ! ', this.stepKeySurvey3);
    console.log('send survey ! ', this.stepKeySurvey2);
    this.isStepSurvey3b = false;
    this.stepKeySurvey3 = '';
    this.stepKeySurvey2 = '';
    this.isStepSurvey4 = true;
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
  checked(event: any) {
    this.stepKeySurvey3 = '';
    const datacheckbox = this.checkboxitem;
    datacheckbox.forEach((element: any) => {
      // console.log(element.nativeElement);
      // const child_element = element.nativeElement;
      // console.log(child_element.checked);

      if (element.nativeElement.checked === true && element.nativeElement.value !== '4') {
        this.stepKeySurvey3 = '3a';
      }


      this.checkTotalFalse(element.nativeElement)

    });

  }
  checkTotalFalse(element: any) {
    const number = element.value;
    const checked = element.checked;
    if (number === '4' && checked === true) {
      this.isSurveyComment = true;
    } else {
      this.isSurveyComment = false;
    }
  }
  nextStep3b(): void {
    this.isStepSurvey3b = true;
  }
}
