import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
SwiperCore.use([Pagination, EffectCoverflow]);
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
  Swiper,
  EffectCoverflow,

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
  imports: [SwiperModule,CarouselModule,CollapseModule,CommonModule,HttpClientModule],
  templateUrl: './bannercontent.component.html',
  styleUrl: './bannercontent.component.scss'
})
export class BannercontentComponent implements OnInit, AfterViewInit{
  title: string | undefined;
  swiper: Swiper | undefined;
  config: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  
  bindingdata: any;
  constructor( public _router: Router, private _route: ActivatedRoute, private httpClient: HttpClient) { }
  ngOnInit(): void {
   
    this.navload()
  }
  
  ngAfterViewInit(): void {
    this.swiper = new Swiper('.mySwiper', {
      pagination: {
        el: '.swiper-pagination',
      },
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 75,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    });
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='binding'){
        this.title='binding'
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.binding)
          this.bindingdata = data.binding;


        })
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

  images = [
    { url: '../../assets/img/banner/flag.jpg', alt: 'Image 1' },
    { url: '../../assets/img/banner/tshirt.jpg', alt: 'Image 2' },
    { url: '../../assets/img/banner/flag.jpg', alt: 'Image 3' }
  ];

  activeSlideIndex = 0;
  slides = [
    { image: '../../assets/img/banner/flag.jpg', caption: 'Caption 1' },
    { image: '../../assets/img/banner/tshirt.jpg', caption: 'Caption 2' },
    { image: '../../assets/img/banner/flag.jpg', caption: 'Caption 3' }
  ];
}

