import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { addHours, addDays } from 'date-fns';
import { Page } from './query-page.class';

const MockCreatorName = 'qwe111';

@Injectable({ providedIn: 'root' })
export class SurveyService {
  constructor() {}

  getClassify(params: any): Observable<any> {
    const data = [
      {
        name: '教育',
        creator_name: MockCreatorName,
        creat_at: new Date(),
      },
      {
        name: '母婴',
        creator_name: MockCreatorName,
        creat_at: addHours(new Date(), -2),
      },
      {
        name: '建筑',
        creator_name: MockCreatorName,
        creat_at: addHours(new Date(), +5),
      },
      {
        name: '学前教育',
        creator_name: MockCreatorName,
        creat_at: addDays(new Date(), -2),
      },
      {
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
}
