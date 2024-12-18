import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderComponent } from './shared/components/header/header.component';



@NgModule({
  imports: [ ],
  providers: [],
  bootstrap: []
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
