import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ SharedModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  title = 'idrice24';
}
