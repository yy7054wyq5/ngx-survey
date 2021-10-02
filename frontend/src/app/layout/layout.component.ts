import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../core/current-user.service';
import { MemberService } from '../core/member.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
})
export class LayoutComponent implements OnInit {
  constructor(
    public currentUserService: CurrentUserService,
    public memberService: MemberService
  ) {}

  isCollapsed = false;

  ngOnInit(): void {}
}
