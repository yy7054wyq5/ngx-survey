import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MemberService } from '../../core/member.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.less'],
})
export class ChangePasswordComponent implements OnInit {
  constructor(
    private memberService: MemberService,
    private nzMessageService: NzMessageService
  ) {}

  password: string;

  ngOnInit(): void {}

  submit(): void {
    this.memberService.patchPassword().subscribe({
      next: () => {
        this.nzMessageService.success('操作成功');
      },
    });
  }
}
