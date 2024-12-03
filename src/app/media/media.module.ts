import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'about', component: AboutComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutComponent,
    SharedModule,
    AboutUsComponent,
    RouterModule.forChild(routes)
  ],
  exports: [
    AboutUsComponent,
    AboutComponent
  ]
})
export class MediaModule { }
