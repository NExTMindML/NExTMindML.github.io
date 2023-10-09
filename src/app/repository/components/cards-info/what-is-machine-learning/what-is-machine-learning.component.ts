import { Component } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-what-is-machine-learning',
  templateUrl: './what-is-machine-learning.component.html',
  styleUrls: ['./what-is-machine-learning.component.scss']
})
export class WhatIsMachineLearningComponent {
  ngOnInit() {
    AOS.init();
  }
}
