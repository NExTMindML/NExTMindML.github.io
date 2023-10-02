import { Component, Input } from '@angular/core';
import { Card } from 'src/app/core/models/card';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent {
  @Input() tittle?: String;
  @Input() cards?: Card[];

  isCollapsed = true;
  isArrowDown = false;

  toggleArrow() {
    this.isArrowDown = !this.isArrowDown;
    this.isCollapsed = !this.isCollapsed;
  }
}
