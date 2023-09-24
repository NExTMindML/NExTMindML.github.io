import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingRoutingModule } from './landing-routing.module';


@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
