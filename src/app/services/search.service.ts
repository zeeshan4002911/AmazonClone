import { Injectable } from '@angular/core';
import {  BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private sharedDataSubject = new BehaviorSubject<any>(null);
  sharedData$ = this.sharedDataSubject.asObservable();

  constructor() {}
  searchValue: string = '';

  setSharedData(data: any): void {
    this.sharedDataSubject.next(data);
  }
}
