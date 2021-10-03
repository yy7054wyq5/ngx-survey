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
    private surveyService: SurveyService,
    private nzMessageService: NzMessageService,
    private nzModalService: NzModalService
  ) {
    super();
  }

  @ViewChild('addClassifyTpl') addClassifyTpl: TemplateRef<object>;

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

    this.query$.subscribe({
      next: (query) => {
        // TODO: 查询
      },
    });

    this.data = [
      {
        name: '教育',
        creator_name: 'qwe111',
        creat_at: new Date(),
      },
      {
        name: '母婴',
        creator_name: 'qwe111',
        creat_at: addHours(new Date(), -2),
      },
      {
        name: '建筑',
        creator_name: 'qwe111',
        creat_at: addHours(new Date(), +5),
      },
      {
        name: '学前教育',
        creator_name: 'qwe111',
        creat_at: addDays(new Date(), -2),
      },
      {
        name: '玩具',
        creator_name: 'qwe111',
        creat_at: addDays(new Date(), 1),
      },
    ];

    this.page = new Page({
      current: 1,
      size: 10,
      items: 1,
    });
  }

  submit(data?: any): void {
    this.addClassifyForm.reset();

    let req$ = this.surveyService.addClassify(
      this.addClassifyForm.getRawValue()
    );
    if (data) {
      this.addClassifyForm.patchValue({
        name: data.name,
        id: data.id,
      });
      req$ = this.surveyService.patchClassify(
        this.addClassifyForm.getRawValue()
      );
    }

    this.nzModalService.create({
      nzTitle: data ? '编辑分类' : '添加分类',
      nzContent: this.addClassifyTpl,
      nzOnOk: () => {
        if (this.addClassifyForm.invalid) {
          return false;
        }
        req$.toPromise().then(() => {
          this.nzMessageService.success('操作成功');
        });
      },
    });
  }
}
