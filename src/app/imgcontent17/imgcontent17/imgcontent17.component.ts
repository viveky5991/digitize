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
  selector: 'app-imgcontent17',
  standalone: true,
  imports: [SwiperModule,RouterModule,CommonModule],
  templateUrl: './imgcontent17.component.html',
  styleUrl: './imgcontent17.component.scss',
  animations: Animations
})
export class Imgcontent17Component  implements OnInit{
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
      if(url[0].path=='wooden-backdrop'){
        this.title='Wooden frame Backdrop';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.woodenbackdrop)
          this.digitizedata = data.woodenbackdrop;
        })
      } else if(url[0].path=='repeat-backdrop'){
        this.title='Step and Repeat Backdrop';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.repeatbackdrop)
          this.digitizedata = data.repeatbackdrop;
        })
      } else if(url[0].path=='backdrop-indoor'){
        this.title='Fabric Backdrop Seamless (Indoor)';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.backdropindoor)
          this.digitizedata = data.backdropindoor;
        })
      } else if(url[0].path=='backdrop-outdoor'){
        this.title='Fabric Backdrop Seamless (Outdoor)';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.backdropoutdoor)
          this.digitizedata = data.backdropoutdoor;
        })
      } else if(url[0].path=='popout-banner'){
        this.title='Pop Out Banner';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.popoutbanner)
          this.digitizedata = data.popoutbanner;
        })
      } else if(url[0].path=='toblerone-frame'){
        this.title='Toblerone - Fabric';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.tobleroneframe)
          this.digitizedata = data.tobleroneframe;
        })
      } else if(url[0].path=='cutout-standee'){
        this.title='Foam Board Cutout Standee';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.cutoutstandee)
          this.digitizedata = data.cutoutstandee;
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

