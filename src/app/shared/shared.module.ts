import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/plateform-browser';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    HeaderComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserModule
  ],
  exports: [
    HeaderComponent
    ]
})
export class SharedModule { }
