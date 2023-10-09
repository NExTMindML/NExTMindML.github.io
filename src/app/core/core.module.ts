import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderNavbarComponent
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
