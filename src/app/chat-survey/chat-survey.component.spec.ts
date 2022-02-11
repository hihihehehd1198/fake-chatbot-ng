import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSurveyComponent } from './chat-survey.component';

describe('ChatSurveyComponent', () => {
  let component: ChatSurveyComponent;
  let fixture: ComponentFixture<ChatSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
