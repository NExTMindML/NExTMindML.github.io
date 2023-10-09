import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenRepositoryService {
  public navSection: number = 1;
  constructor() { }

  private eventSubject = new Subject<number>();

  emitEvent(section: number) {
    this.navSection = section;
    this.eventSubject.next(section);
  }

  getEvent() {
    return this.eventSubject.asObservable();
  }
}
