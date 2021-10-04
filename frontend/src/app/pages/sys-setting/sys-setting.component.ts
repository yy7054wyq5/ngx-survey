import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../core/member.service';

@Component({
  selector: 'app-sys-setting',
  templateUrl: './sys-setting.component.html',
  styleUrls: ['./sys-setting.component.less'],
})
export class SysSettingComponent implements OnInit {
  constructor(public memberService: MemberService) {}

  memberId: string;

  ngOnInit(): void {}
}
