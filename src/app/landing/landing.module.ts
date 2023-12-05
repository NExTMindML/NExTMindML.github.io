import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingRoutingModule } from './landing-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { WorkPageComponent } from './components/work-page/work-page.component';
import { NavigationCardComponent } from './components/work-page/navigation-card/navigation-card.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { MemberInfoComponent } from './components/member-info/member-info.component';
import { GruopInfoComponent } from './components/gruop-info/gruop-info.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';


@NgModule({
  declarations: [
    LandingPageComponent,
    HomePageComponent,
    AboutMeComponent,
    WorkPageComponent,
    NavigationCardComponent,
    MemberInfoComponent,
    GruopInfoComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    LandingRoutingModule,
    NgxTypedJsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
  })
  ]
})
export class LandingModule { }
