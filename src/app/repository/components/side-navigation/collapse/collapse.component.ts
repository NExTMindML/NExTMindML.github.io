import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from 'src/app/core/models/card';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent {
  @Input() tittle?: String;
  @Input() cards?: Card[];  
  @Output() selectCardEvent = new EventEmitter<any>();

  isCollapsed = true;
  isArrowDown = false;

  toggleArrow() {
    this.isArrowDown = !this.isArrowDown;
    this.isCollapsed = !this.isCollapsed;
  }

  selectCard(info: String) {
    this.selectCardEvent.emit(info);
  }
}
