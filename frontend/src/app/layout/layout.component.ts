import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../core/current-user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
})
export class LayoutComponent implements OnInit {
  constructor(public currentUserService: CurrentUserService) {}

  isCollapsed = false;

  ngOnInit(): void {}
}
