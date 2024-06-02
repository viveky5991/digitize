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
  selector: 'app-imgcontent13',
  standalone: true,
  imports: [SwiperModule,RouterModule,CommonModule],
  templateUrl: './imgcontent13.component.html',
  styleUrl: './imgcontent13.component.scss',
  animations: Animations
})
export class Imgcontent13Component implements OnInit{
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
      if(url[0].path=='Paperbag'){
        this.title='Paperbag';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.PaperBags)
          this.digitizedata = data.PaperBags;
        })
      } else if(url[0].path=='Kraftbag'){
        this.title='Kraftbag';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Kraftbag)
          this.digitizedata = data.Kraftbag;
        })
      }else if(url[0].path=='NonWovenbag'){
        this.title='NonWovenbag';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.NonWovenbag)
          this.digitizedata = data.NonWovenbag;
        })
      }else if(url[0].path=='Jutebag'){
        this.title='Jutebag';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Jutebag)
          this.digitizedata = data.Jutebag;
        })
      }else if(url[0].path=='Totebag'){
        this.title='Totebag';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Totebag)
          this.digitizedata = data.Totebag;
        })
      }else if(url[0].path=='Canvasbag'){
        this.title='Canvasbag';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Canvasbag)
          this.digitizedata = data.Canvasbag;
        })
      }else if(url[0].path=='Drawstringbag'){
        this.title='Drawstringbag';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Drawstringbag)
          this.digitizedata = data.Drawstringbag;
        })
      }else if(url[0].path=='CottonStringbag'){
        this.title='CottonStringbag';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.CottonStringbag)
          this.digitizedata = data.CottonStringbag;
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

