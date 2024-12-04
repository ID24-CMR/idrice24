import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    ],
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    RouterLinkActive,
  MatIconModule],
  exports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    MatIconModule
    ]
})
export class SharedModule { }
