import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from '../media/components/about-us/about-us.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    HomeComponent,
    AboutUsComponent
  ],
  exports: [
    HomeComponent,
    AboutUsComponent
    ]
})
export class CoreModule { }
