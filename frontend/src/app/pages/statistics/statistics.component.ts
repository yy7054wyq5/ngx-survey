import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QueryPage } from '../../core/query-page.class';
import { SurveyService } from '../../core/survey.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.less'],
})
export class StatisticsComponent extends QueryPage implements OnInit {
  constructor(private fb: FormBuilder, public surveyService: SurveyService) {
    super();
  }

  @ViewChild('viewAnswerTpl') viewAnswerTpl: TemplateRef<object>;

  ngOnInit(): void {
    this.queryForm = this.fb.group({
      title: ['想给孩子报什么延时课'],
      classify_name: ['学前教育'],
    });

    this.getQuery();
    this.query$.subscribe({
      next: (query) => {
        this.getQuery(query);
      },
    });
  }

  private getQuery(params?: any): any {
    this.surveyService.getStatistics(params).subscribe((res) => {
      this.data = res.data;
    });
  }
}
