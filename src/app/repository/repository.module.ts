import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryPageComponent } from './components/repository-page/repository-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    RepositoryPageComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RepositoryRoutingModule
  ]
})
export class RepositoryModule { }import { RepositoryRoutingModule } from './repository-routing.module';

