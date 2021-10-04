import { Component, OnInit } from '@angular/core';
import {
  AskType,
  SurveyPaperItem,
  SurveyService,
} from '../../core/survey.service';

@Component({
  selector: 'app-fill-survey',
  templateUrl: './fill-survey.component.html',
  styleUrls: ['./fill-survey.component.less'],
})
export class FillSurveyComponent implements OnInit {
  constructor(public surveyService: SurveyService) {}

  schema: SurveyPaperItem[] = [];
  title: string;
  askType = AskType;

  ngOnInit(): void {
    this.surveyService.getTemplateschema({}).subscribe({
      next: (data) => {
        console.log(data);
        this.title = data.title;
        this.schema = data.schema;
      },
    });
  }

  submit(): void {}
}
