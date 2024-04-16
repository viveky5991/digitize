import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
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
  selector: 'app-bannercontent',
  standalone: true,
  imports: [SwiperModule],
  templateUrl: './bannercontent.component.html',
  styleUrl: './bannercontent.component.scss'
})
export class BannercontentComponent implements OnInit{
  title: string | undefined;
  config: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  constructor( public _router: Router, private _route: ActivatedRoute,) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='binding'){
        this.title='binding'
      }else if(url[0].path=='certificates'){
        this.title='certificates'
      }else if(url[0].path=='booklets'){
        this.title='booklets'
      }else if(url[0].path=='foil'){
        this.title='foil'
      }else{
        this.title='Digitize'
      }
    })
  }
  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}

