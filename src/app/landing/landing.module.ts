import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingRoutingModule } from './landing-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { WorkPageComponent } from './components/work-page/work-page.component';
import { NavigationCardComponent } from './components/work-page/navigation-card/navigation-card.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    HomePageComponent,
    AboutMeComponent,
    WorkPageComponent,
    NavigationCardComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
