import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';



@NgModule({
  declarations: [
    ],
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    RouterLinkActive],
  exports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterModule
    ]
})
export class SharedModule { }
