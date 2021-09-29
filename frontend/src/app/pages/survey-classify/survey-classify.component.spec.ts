import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SurveyClassifyComponent } from './survey-classify.component';

describe('SurveyClassifyComponent', () => {
  let component: SurveyClassifyComponent;
  let fixture: ComponentFixture<SurveyClassifyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyClassifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyClassifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
