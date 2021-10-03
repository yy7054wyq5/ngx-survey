import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Page, QueryPage } from '../../core/query-page.class';
import { addHours, addDays } from 'date-fns';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SurveyService } from '../../core/survey.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-survey-template',
  templateUrl: './survey-template.component.html',
  styleUrls: ['./survey-template.component.less'],
})
export class SurveyTemplateComponent extends QueryPage implements OnInit {
  constructor(
    private fb: FormBuilder,
    public surveyService: SurveyService,
    private nzMessageService: NzMessageService,
    private nzModalService: NzModalService
  ) {
    super();
  }

  addClassifyForm = this.fb.group({
    name: ['', [Validators.required]],
    id: [''],
  });

  ngOnInit(): void {
    this.queryForm = this.fb.group({
      creator_name: [''],
      create_time: new FormControl([]),
      submit_time: new FormControl([]),
      classify_name: [''],
      title: [''],
      status: [''],
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
    this.surveyService.getTemplate(params).subscribe((res) => {
      this.data = res.data;
      this.page = res.page;
    });
  }
}
