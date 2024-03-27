import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routes';
import { SwiperModule } from 'swiper/angular';
@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet,FooterComponent,NavbarComponent, HomeComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit {
  title = 'digitize';

  constructor(private router: Router) {}

  ngOnInit(): void {
  }


}
