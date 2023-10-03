import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryPageComponent } from './components/repository-page/repository-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './components/side-navigation/navigation/navigation.component';



@NgModule({
  declarations: [
    RepositoryPageComponent,
    NavigationComponent,
    CollapseComponent,
    RepositoryCardComponent,
    WhatIsMachineLearningComponent,
    TittleComponent,
    ParagraphComponent,
    SubTitleComponent,
    MiniSubTitleComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RepositoryRoutingModule
  ]
})
export class RepositoryModule { }import { RepositoryRoutingModule } from './repository-routing.module';
import { CollapseComponent } from './components/side-navigation/collapse/collapse.component';
import { RepositoryCardComponent } from './components/side-navigation/repository-card/repository-card.component';
import { WhatIsMachineLearningComponent } from './components/cards-info/what-is-machine-learning/what-is-machine-learning.component';
import { TittleComponent } from './components/text-components/title/tittle.component';
import { ParagraphComponent } from './components/text-components/paragraph/paragraph.component';
import { SubTitleComponent } from './components/text-components/sub-title/sub-title.component';
import { MiniSubTitleComponent } from './components/text-components/mini-sub-title/mini-sub-title.component';
import { ListItemComponent } from './components/text-components/list-item/list-item.component';

