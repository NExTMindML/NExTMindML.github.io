import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingRoutingModule } from './landing-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
