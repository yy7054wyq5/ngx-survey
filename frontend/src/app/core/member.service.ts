import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MD5 } from 'crypto-js';
import { Observable, of } from 'rxjs';
import { Page } from './query-page.class';

@Injectable({ providedIn: 'root' })
export class MemberService {
  constructor(private router: Router) {}

  login(data: { userName: string; password: string }): Observable<unknown> {
    const pwd = MD5(data.password).toString();
    // TODO: 对接接口
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(true);
      }, 1000);
    });
  }

  logout(): Promise<unknown> {
    return this.router.navigate(['/login']).then(() => {});
  }

  patchPassword(): Observable<void> {
    return of();
  }

  goChangePassword(): Promise<boolean> {
    return this.router.navigate(['/change-password']);
  }

  getMember(params: any): Observable<{ page: Page; data: Array<any> }> {
    return of({
      page: new Page({
        current: 1,
        size: 10,
        items: 2,
      }),
      data: [
        {
          account: 'qwe111',
          id: 2,
        },
        {
          account: 'qwe123',
          id: 3,
        },
      ],
    });
  }
}
