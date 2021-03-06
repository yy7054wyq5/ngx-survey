import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Page, QueryPage } from '../../core/query-page.class';
import { addHours, addDays } from 'date-fns';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SurveyService } from '../../core/survey.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.less'],
})
export class SurveyComponent extends QueryPage implements OnInit {
  constructor(
    private fb: FormBuilder,
    public surveyService: SurveyService,
    private nzMessageService: NzMessageService,
    private nzModalService: NzModalService
  ) {
    super();
  }

  @ViewChild('viewAnswerTpl') viewAnswerTpl: TemplateRef<object>;

  ngOnInit(): void {
    this.queryForm = this.fb.group({
      title: [''],
      classify_name: [''],
      submit_at: [''],
      page: [this.page.current],
      pageSize: [this.page.size],
    });

    this.getQuery();
    this.query$.subscribe({
      next: (query) => {
        this.getQuery(query);
      },
    });
  }

  private getQuery(params?: any): any {
    this.surveyService.getSurvey(params).subscribe((res) => {
      this.data = res.data;
      this.page = res.page;
    });
  }

  remove(index: number): void {
    this.data.splice(index);
  }

  // TODO:
  viewSurvey(): void {}
}
