import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardSelectEventEmitterService } from 'src/app/repository/services/card-select-event-emitter.service';

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.scss']
})
export class RepositoryCardComponent {
@Input() minutesRead?: number;
@Input() tittle?: String;
@Input() python?: boolean = false;
@Input() excel?: boolean = false;
@Input() miner?: boolean = false;
@Input() info?: any;
@Input() labels?: any;
isActive: boolean = false;
@Output() selectCardEvent = new EventEmitter<any>();

constructor(private cardSelectedEvent: CardSelectEventEmitterService) {}

ngOnInit() {
  this.cardSelectedEvent.getEvent().subscribe((e: any) => {
    this.isActive = e == this;
    }
  )
}

selectCard() {
  this.selectCardEvent.emit(this.info);
  this.cardSelectedEvent.emitEvent(this)
}
}


