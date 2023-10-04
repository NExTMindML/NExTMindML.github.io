import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardSelectEventEmitterService {

  constructor() { }

  private eventSubject = new Subject<any>();

  emitEvent(componentEvent: any) {
    this.eventSubject.next(componentEvent);
  }

  getEvent() {
    return this.eventSubject.asObservable();
  }
}
