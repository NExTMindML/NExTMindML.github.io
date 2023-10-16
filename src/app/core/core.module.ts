import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';
import { RouterModule } from '@angular/router';
import { ContactMeModalComponent } from './components/contact-me-modal/contact-me-modal.component';
import { ContactProviderComponent } from './components/contact-me-modal/contact-provider/contact-provider.component';



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
    RouterModule
  ]
})
export class CoreModule { }
