import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';
import { RouterModule } from '@angular/router';
import { ContactMeModalComponent } from './components/contact-me-modal/contact-me-modal.component';
import { ContactProviderComponent } from './components/contact-me-modal/contact-provider/contact-provider.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';



@NgModule({
  declarations: [
    HeaderNavbarComponent,
    ContactMeModalComponent,
    ContactProviderComponent
  ],
  exports: [
    HeaderNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
  })
  ]
})
export class CoreModule { }
