import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './shared/animations/animation';
import { timer } from 'rxjs';
import * AOS from 'aos';

@Component({
  selector: 'app-root',
  //standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'idrice24';
  loading: boolean;
  location!: Location;

  ngOnInit(){
    timer(2000).subscribe( x => this.loading = false);
  }

   // this is to detect any change in the project
  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
