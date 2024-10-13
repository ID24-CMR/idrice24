import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/plateform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animation';
import { AppRoutes } from './app/app.routes';



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutes,
    SharedModule,
    CoreModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
// Diagnostic only: inspect router configuration
constructor(
  private router: Router){
   const replace = (key: any, value: any)=>{
    console.log(key);
    return (typeof value == 'function') ? value.name : value;
  }
  console.log('Routes: ', JSON.stringify(this.router.config, replace, 2));
   } }
