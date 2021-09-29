import { Injectable } from '@angular/core';

export interface CurrentUser {
  accout: string;
}

@Injectable({ providedIn: 'root' })
export class CurrentUserService {
  constructor() {}

  data: CurrentUser | null;

  update(data: CurrentUser): void {
    if (!data) {
      throw new Error('update() data 无效');
    }
    this.data = data;
  }

  clear(): void {
    this.data = null;
  }
}
