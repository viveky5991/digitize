import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SwiperOptions } from 'swiper';
import { PopupComponent } from '../../popup/popup.component';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { Animations } from '../../animation';

@Component({
  selector: 'app-imgcontent16',
  standalone: true,
  imports: [SwiperModule,RouterModule,CommonModule],
  templateUrl: './imgcontent16.component.html',
  styleUrl: './imgcontent16.component.scss',
  animations: Animations
})
export class Imgcontent16Component  implements OnInit{
  title: string | undefined;
  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  digitizedata: any;
  constructor( public _router: Router, private _route: ActivatedRoute,  private httpClient: HttpClient,public dialog: MatDialog) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='popups'){
        this.title='Pop Up Softcase';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.popups)
          this.digitizedata = data.popups;
        })
      } else if(url[0].path=='fabric-popups'){
        this.title='Fabric Popups';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.fabricpopups)
          this.digitizedata = data.fabricpopups;
        })
      }else if(url[0].path=='rollup-banners'){
        this.title='ROLL UP BANNER';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.rollupbanners)
          this.digitizedata = data.rollupbanners;
        })
      }else if(url[0].path=='x-banners'){
        this.title='X Banners';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.xbanners)
          this.digitizedata = data.xbanners;
        })
      }else if(url[0].path=='banners-flex'){
        this.title='Banners Flex'; 
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.bannersflex)
          this.digitizedata = data.bannersflex;
        }) 
      }else if(url[0].path=='fence-banners'){
        this.title='Fence Banners';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.fencebanners)
          this.digitizedata = data.fencebanners;
        })
      }else if(url[0].path=='lama-stand'){
        this.title='Lama Stand Display';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.lamastand)
          this.digitizedata = data.lamastand;
        })
      }else{
        this.title='Digitize'
      }
    })
  }
  EnquiryNow() {

    const dialogRef = this.dialog.open(PopupComponent, {
      width: '900px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog closed');
    });
  }

}

