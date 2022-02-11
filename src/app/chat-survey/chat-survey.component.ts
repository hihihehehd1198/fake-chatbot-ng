import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-chat-survey',
  templateUrl: './chat-survey.component.html',
  styleUrls: ['./chat-survey.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChatSurveyComponent implements OnInit {

  constructor() { }
  listRate = [1,2,3,4,5,6,7];
  @Input('message') message : any;
  ngOnInit(): void {

  }

}
