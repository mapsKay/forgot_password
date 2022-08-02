import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import { LoginComponent } from './Components/login/login.component'; 



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
