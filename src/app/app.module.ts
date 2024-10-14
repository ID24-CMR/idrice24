import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { HeaderComponent } from './shared/components/header/header.component';



@NgModule({
  declarations: [ HeaderComponent ],
  imports: [ ],
  providers: [],
  bootstrap: [HeaderComponent]
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
