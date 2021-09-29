import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SurveyTemplateComponent } from './survey-template.component';

describe('SurveyTemplateComponent', () => {
  let component: SurveyTemplateComponent;
  let fixture: ComponentFixture<SurveyTemplateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
