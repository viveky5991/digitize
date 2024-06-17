import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../../popup/popup.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
SwiperCore.use([Pagination, EffectCoverflow]);
import SwiperCore, {
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
import { MatDialog } from '@angular/material/dialog';
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
  imports: [SwiperModule, CarouselModule, CollapseModule, CommonModule, HttpClientModule],
  templateUrl: './bannercontent.component.html',
  styleUrl: './bannercontent.component.scss'
})
export class BannercontentComponent implements OnInit, AfterViewInit {
  title: string | undefined;
  swiper: Swiper | undefined;
  config: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };


  bindingdata: any;
  contentinfo: any;
  constructor(public _router: Router, private _route: ActivatedRoute, private httpClient: HttpClient, public dialog: MatDialog) { }
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
        depth: 10,
        modifier: 1,
        slideShadows: true,
      },
    });
  }
  navload() {
    this._route.url.subscribe((url: any) => {

      if (url[0].path == 'binding') {
        this.title = 'Binding'
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {
          // console.log(data.binding)
          this.bindingdata = data.binding;
        })
      } else if (url[0].path == 'certificates') {
        this.title = 'Certificates';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {
          console.log(data.certificates)
          this.bindingdata = [];
          this.contentinfo=[]
          data.certificates.forEach((element: any) => {

            if(element[0]){
              this.contentinfo.push(element)
              // this.contentinfo=[element]
              console.log(this.contentinfo)
              // this.titleService.setTitle('Business-card');
              // this.metaService.updateTag({ name: 'description', content: 'businesscard' });
              // this.metaService.updateTag({ property: 'og:title', content: 'businesscard' });
            } else {
              this.bindingdata.push(element)
            }
          });
          console.log(this.bindingdata)
        })
      } else if (url[0].path == 'booklets') {
        this.title = 'Booklets & Catalogues';
         this.httpClient.get<any>("assets/data.json").subscribe((data) => {
          console.log(data.booklets)
          this.bindingdata = [];
          this.contentinfo=[]
          data.booklets.forEach((element: any) => {

            if(element[0]){
              this.contentinfo.push(element)
              // this.contentinfo=[element]
              console.log(this.contentinfo)
              // this.titleService.setTitle('Business-card');
              // this.metaService.updateTag({ name: 'description', content: 'businesscard' });
              // this.metaService.updateTag({ property: 'og:title', content: 'businesscard' });
            } else {
              this.bindingdata.push(element)
            }
          });
          console.log(this.bindingdata)
        })
      } else if (url[0].path == 'foil') {
        this.title = 'Foil Stickers';
       this.httpClient.get<any>("assets/data.json").subscribe((data) => {
          console.log(data.foil)
          this.bindingdata = [];
          this.contentinfo=[]
          data.foil.forEach((element: any) => {

            if(element[0]){
              this.contentinfo.push(element)
              // this.contentinfo=[element]
              console.log(this.contentinfo)
              // this.titleService.setTitle('Business-card');
              // this.metaService.updateTag({ name: 'description', content: 'businesscard' });
              // this.metaService.updateTag({ property: 'og:title', content: 'businesscard' });
            } else {
              this.bindingdata.push(element)
            }
          });
          console.log(this.bindingdata)
        })
      } else {
        this.title = 'Digitize'
      }
    })
  }
  onSwiper(swiper: any) {
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

  EnquiryNow() {
    // const dialogRef = this.dialog.open(PopupComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '900px',
    });
    // dialogRef.afterOpened().subscribe(() => {
    //   // Find the dialog container element by class name or any other means if necessary
    //   const dialogContainer = document.querySelector('.mat-dialog-container');
    //   // Check if the element exists
    //   if (dialogContainer) {
    //     // Set the role attribute to 'dialog'
    //     this.renderer.setAttribute(dialogContainer, 'role', 'dialog');
    //   }
    // });
    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog closed');
    });
  }
}

