import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MD5 } from 'crypto-js';
import { Observable } from 'rxjs';

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
}
