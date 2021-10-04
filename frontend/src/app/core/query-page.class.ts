import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

export class Page {
  current = 1;
  size = 10;
  items = 0;
  constructor(page?: { current: number; size: number; items: number }) {
    if (page) {
      Object.assign(this, page);
    }
  }
}

export class QueryPage<T = any> {
  queryForm: FormGroup;
  page: Page = {
    current: 1,
    size: 10,
    items: 0,
  };
  data: T[];
  loading = false;
  query$ = new Subject();
}
