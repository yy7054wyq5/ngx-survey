import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MD5 } from 'crypto-js';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Page } from './query-page.class';

@Injectable({ providedIn: 'root' })
export class MemberService {
  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private nzMessageService: NzMessageService
  ) {}

  login(data: { userName: string; password: string }): Observable<unknown> {
    // const pwd = MD5(data.password).toString();
    return this.httpClient.post('/api/login', {
      account: data.userName,
      password: data.password,
    });
  }

  register(params): Observable<any> {
    return this.httpClient.post<void>('/api/register', params).pipe(
      map((res) => {
        this.nzMessageService.success('注册成功');
        return res;
      })
    );
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
