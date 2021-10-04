import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Page, QueryPage } from '../../core/query-page.class';
import { addHours, addDays } from 'date-fns';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SurveyService } from '../../core/survey.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MemberService } from '../../core/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.less'],
})
export class MemberComponent extends QueryPage implements OnInit {
  constructor(
    private fb: FormBuilder,
    public memberService: MemberService,
    private nzMessageService: NzMessageService,
    private nzModalService: NzModalService
  ) {
    super();
  }

  editForm: FormGroup;

  @ViewChild('editTpl') editTpl: TemplateRef<object>;

  ngOnInit(): void {
    this.queryForm = this.fb.group({
      account: [''],
      page: [this.page.current],
      pageSize: [this.page.size],
    });

    this.editForm = this.fb.group({
      account: ['', [Validators.required]],
      password: [''],
    });

    this.getQuery();
    this.query$.subscribe({
      next: (query) => {
        this.getQuery(query);
      },
    });
  }

  private getQuery(params?: any): any {
    this.memberService.getMember(params).subscribe((res) => {
      this.data = res.data;
      this.page = res.page;
    });
  }

  remove(index: number): void {
    this.data.splice(index);
  }

  edit(data?: { account: string; id: number }): void {
    this.editForm.reset();
    if (data) {
      this.editForm.patchValue(data);
    }
    this.nzModalService.create({
      nzTitle: data ? ' 编辑' : '新增',
      nzContent: this.editTpl,
      nzOnOk: () => {},
    });
  }
}
