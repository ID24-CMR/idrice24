import { Component } from '@angular/core';
import { CoreModule } from "../../core.module";
import { AboutUsComponent } from "../../../media/components/about-us/about-us.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CoreModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
