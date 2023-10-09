import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-ml-technical-aspect',
  templateUrl: './ml-technical-aspect.component.html',
  styleUrls: ['./ml-technical-aspect.component.scss']
})
export class MlTechnicalAspectComponent {
  ngOnInit() {
    AOS.init();
  }
}
