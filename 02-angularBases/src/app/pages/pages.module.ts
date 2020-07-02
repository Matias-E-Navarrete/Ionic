import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
  ]
})
export class PagesModule { }
