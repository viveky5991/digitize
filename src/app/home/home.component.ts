import { Component } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
// import SwiperCore, { SwiperOptions } from 'swiper';
import SwiperCore , {
  Navigation,
  Pagination,
  Scrollbar,
  SwiperOptions,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';
import { RouterModule } from '@angular/router';
import { Animations } from '../animation';
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SwiperModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: Animations
})
export class HomeComponent {
  config: SwiperOptions = {
    // slidesPerView: 2,
    // spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    breakpoints: {
      // When the viewport width is 992 pixels or less
      992: {
        slidesPerView: 2,
        spaceBetween: 50 // Keeps the same spacing as the default configuration
      },
      // When the viewport width is 640 pixels or less
      640: {
        slidesPerView: 1,
        spaceBetween: 30 // Reduced space for smaller screens
      }
    }
  };
  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
