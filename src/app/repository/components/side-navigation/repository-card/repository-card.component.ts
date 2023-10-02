import { Component, Input } from '@angular/core';

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
}
