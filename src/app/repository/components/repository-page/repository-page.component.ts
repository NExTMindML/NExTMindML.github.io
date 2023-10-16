import { Component, ElementRef, HostListener, Input, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { WhatIsMachineLearningComponent } from '../cards-info/what-is-machine-learning/what-is-machine-learning.component';
import { NotPageInfoComponent } from '../cards-info/not-page-info/not-page-info.component';
import { CardSelectEventEmitterService } from '../../services/card-select-event-emitter.service';
import { OpenRepositoryService } from 'src/app/landing/services/open-repository.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-repository-page',
  templateUrl: './repository-page.component.html',
  styleUrls: ['./repository-page.component.scss'],
})
export class RepositoryPageComponent {
  @ViewChild('container', { read: ViewContainerRef, static: false }) container!: ViewContainerRef;
  isMobile?: boolean;
  isViewedInfo: boolean = false;
  public activeNav?;

  constructor(public viewContainerRef: ViewContainerRef, 
    private cardEventService: CardSelectEventEmitterService, 
    private repositoryEventEmitter: OpenRepositoryService) { 
      this.activeNav = repositoryEventEmitter.navSection;
    }

  ngOnInit() {
    AOS.init();
    this.checkIfMobile();
    this.repositoryEventEmitter.getEvent().subscribe((section) => {
      this.activeNav = section;
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event: any) {
    this.checkIfMobile();
  }

  checkIfMobile() {
    this.isMobile = window.innerWidth < 992;
    console.log(window.innerWidth)
  }

  callInfo(info: any) {
    this.isViewedInfo = true;
    this.container.clear();
  
    console.log(this.isViewedInfo)
    try {
      this.container.createComponent(info);
    } catch (e: any) {
      this.container.createComponent(NotPageInfoComponent);
    }
  }

  searchView() {
    this.isViewedInfo = false;
    this.cardEventService.emitEvent(undefined)
  }
}