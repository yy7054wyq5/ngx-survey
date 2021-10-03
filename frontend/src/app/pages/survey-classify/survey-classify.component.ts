import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Page, QueryPage } from '../../core/query-page.class';
import { addHours, addDays } from 'date-fns';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SurveyService } from '../../core/survey.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-survey-classify',
  templateUrl: './survey-classify.component.html',
  styleUrls: ['./survey-classify.component.less'],
})
export class SurveyClassifyComponent extends QueryPage implements OnInit {
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
      classify_name: [''],
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
    this.surveyService.getClassify(params).subscribe((res) => {
      this.data = res.data;
      this.page = res.page;
    });
  }

  submitClassify(data?: any): void {
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
