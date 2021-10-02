import { Injectable } from '@angular/core';

export interface CurrentUser {
  accout: string;
}

const currentUser = 'currentUser';

@Injectable({ providedIn: 'root' })
export class CurrentUserService {
  constructor() {
    const data = localStorage.getItem(currentUser);
    if (data) {
      this.data = JSON.parse(data);
    }
  }

  data: CurrentUser | null;

  update(data: CurrentUser): void {
    if (!data) {
      throw new Error('update() data 无效');
    }
    this.data = data;
    localStorage.setItem('currentUser', JSON.stringify(data));
  }

  clear(): void {
    this.data = null;
  }
}
