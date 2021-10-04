import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { addHours, addDays, addMonths, addWeeks } from 'date-fns';
import { Page } from './query-page.class';
import { Router } from '@angular/router';

const MockCreatorName = 'qwe111';
export const LocalTemplate = 'LocalTemplate';

export enum AskType {
  Radio = 'radio',
  Checkbox = 'checkbox',
  TextArea = 'textarea',
}

export interface SurveyPaperItem {
  title: string;
  type: AskType;
  isRequired: boolean;
  options?: string[];
}

@Injectable({ providedIn: 'root' })
export class SurveyService {
  constructor(private router: Router) {}

  statusOptions = [
    { label: '编辑中', value: 'edit' },
    {
      label: '分发中',
      value: 'outgiving',
    },
  ];

  getClassify(params: any): Observable<any> {
    const data = [
      {
        id: 1,
        name: '教育',
        creator_name: MockCreatorName,
        creat_at: new Date(),
      },
      {
        id: 2,
        name: '母婴',
        creator_name: MockCreatorName,
        creat_at: addHours(new Date(), -2),
      },
      {
        id: 3,
        name: '建筑',
        creator_name: MockCreatorName,
        creat_at: addHours(new Date(), +5),
      },
      {
        id: 4,
        name: '学前教育',
        creator_name: MockCreatorName,
        creat_at: addDays(new Date(), -2),
      },
      {
        id: 5,
        name: '玩具',
        creator_name: MockCreatorName,
        creat_at: addDays(new Date(), 1),
      },
    ];

    return of({
      page: new Page({
        current: 1,
        size: 10,
        items: data.length,
      }),
      data,
    });
  }

  addClassify(data: any): Observable<any> {
    return of();
  }

  patchClassify(data: any): Observable<any> {
    return of();
  }

  goTemplate(id?: string): Promise<boolean> {
    if (id) {
      return this.router.navigate(['/survey-template', id]);
    }
    return this.router.navigate(['/survey-template/add']);
  }

  outGiving(id: string): Promise<boolean> {
    return of(true).toPromise();
  }

  getSurvey(params: any): Observable<{ data: Array<any>; page: Page }> {
    const data = [
      {
        id: 1,
        templateId: 1,
        templateTitile: '想给孩子报什么延时课',
        classify_name: '教育',
        submit_at: addDays(new Date(), 4),
        answer: ['A,B', 'A', ''],
      },
      {
        id: 2,
        templateId: 1,
        templateTitile: '想给孩子报什么延时课',
        classify_name: '教育',
        submit_at: addWeeks(new Date(), -2),
        answer: ['B,C', 'B', '孩子不想上延时课'],
      },
      {
        id: 3,
        templateId: 1,
        templateTitile: '想给孩子报什么延时课',
        classify_name: '教育',
        submit_at: addDays(new Date(), 7),
        answer: ['C,D', 'A', ''],
      },
      {
        id: 4,
        templateId: 1,
        templateTitile: '想给孩子报什么延时课',
        classify_name: '教育',
        submit_at: addWeeks(new Date(), 1),
        answer: ['B,D', 'B', 'XXXXX'],
      },
      {
        id: 5,
        templateId: 1,
        templateTitile: '想给孩子报什么延时课',
        classify_name: '教育',
        submit_at: addWeeks(new Date(), 2),
        answer: ['A,B', 'B', '一样一样'],
      },
    ];
    return of({
      page: new Page({ current: 1, size: 10, items: 5 }),
      data,
    });
  }

  outgivingTemplate(id: string, data: any): Observable<any> {
    localStorage.setItem(LocalTemplate, JSON.stringify(data));
    return of(true);
  }

  getTemplate(params: any): Observable<{ data: Array<any>; page: Page }> {
    const data = [
      {
        id: 1,
        title: '课后时间小调查',
        creator_name: MockCreatorName,
        classify_name: '教育',
        creat_at: addWeeks(new Date(), -2),
        submit_at: addWeeks(new Date(), -2),
        submit_end: addWeeks(new Date(), 2),
        status_name: '编辑中',
      },
      {
        id: 2,
        title: '3-5 岁幼儿喜欢的玩具',
        creator_name: MockCreatorName,
        classify_name: '玩具',
        creat_at: addWeeks(new Date(), -1),
        submit_at: addWeeks(new Date(), -1),
        submit_end: addWeeks(new Date(), 1),
        status_name: '编辑中',
      },
      {
        id: 3,
        title: '奶粉畅销调查',
        creator_name: MockCreatorName,
        classify_name: '母婴',
        creat_at: addWeeks(new Date(), -3),
        submit_at: addWeeks(new Date(), -1),
        submit_end: addWeeks(new Date(), 3),
        status_name: '编辑中',
      },
      {
        id: 4,
        title: '喜欢的建筑风格',
        creator_name: MockCreatorName,
        classify_name: '建筑',
        creat_at: addMonths(new Date(), -2),
        submit_at: addMonths(new Date(), -2),
        submit_end: addMonths(new Date(), 2),
        status_name: '分发中',
      },
      {
        id: 5,
        title: '小学 4-6 年级完成作业时间',
        creator_name: MockCreatorName,
        classify_name: '教育',
        creat_at: addMonths(new Date(), -1),
        submit_at: addMonths(new Date(), -1),
        submit_end: addMonths(new Date(), 1),
        status_name: '分发中',
      },
      {
        id: 6,
        title: '想给孩子报什么延时课',
        creator_name: MockCreatorName,
        classify_name: '学前教育',
        creat_at: addMonths(new Date(), -3),
        submit_at: addMonths(new Date(), -3),
        submit_end: addMonths(new Date(), 1),
        status_name: '分发中',
      },
    ];
    return of({
      data,
      page: new Page({
        current: 1,
        size: 10,
        items: data.length,
      }),
    });
  }
}
