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
    RepositoryCardComponent
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

