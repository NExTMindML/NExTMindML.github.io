import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';



@NgModule({
  declarations: [
    HeaderNavbarComponent
  ],
  exports: [
    HeaderNavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
