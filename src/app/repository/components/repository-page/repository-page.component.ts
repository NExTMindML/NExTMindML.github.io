import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { WhatIsMachineLearningComponent } from '../cards-info/what-is-machine-learning/what-is-machine-learning.component';
import { NotPageInfoComponent } from '../cards-info/not-page-info/not-page-info.component';

@Component({
  selector: 'app-repository-page',
  templateUrl: './repository-page.component.html',
  styleUrls: ['./repository-page.component.scss']
})
export class RepositoryPageComponent {
  @ViewChild('container', { read: ViewContainerRef, static: false }) container!: ViewContainerRef;

  constructor(public viewContainerRef: ViewContainerRef) { }

  callInfo(info: any) {
    this.container.clear();
    try {
      this.container.createComponent(info);
    } catch (e: any) {
      this.container.createComponent(NotPageInfoComponent);
    }
  }
}