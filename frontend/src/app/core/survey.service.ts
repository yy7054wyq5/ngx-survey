import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SurveyService {
  constructor() {}

  addClassify(data: any): Observable<any> {
    return of();
  }

  patchClassify(data: any): Observable<any> {
    return of();
  }
}
