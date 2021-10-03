import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Page, QueryPage } from '../../core/query-page.class';
import { addHours, addDays } from 'date-fns';

@Component({
  selector: 'app-survey-classify',
  templateUrl: './survey-classify.component.html',
  styleUrls: ['./survey-classify.component.less'],
})
export class SurveyClassifyComponent extends QueryPage implements OnInit {
  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.queryForm = this.fb.group({
      creator_name: [''],
      create_time: new FormControl([]),
      classify_name: [''],
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
}
