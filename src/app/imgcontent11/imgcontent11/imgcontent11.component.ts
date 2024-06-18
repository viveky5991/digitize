import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { Animations } from '../../animation';
import { PopupComponent } from '../../popup/popup.component';

@Component({
  selector: 'app-imgcontent11',
  standalone: true,
  imports: [SwiperModule, CommonModule,RouterModule],
  templateUrl: './imgcontent11.component.html',
  styleUrl: './imgcontent11.component.scss',
  animations: Animations
})
export class Imgcontent11Component implements OnInit{
  title: string | undefined;
  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  digitizedata: any;
  constructor(public _router: Router, private _route: ActivatedRoute,private httpClient: HttpClient,public dialog: MatDialog) { }
  ngOnInit(): void {

    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='Pens'){
        this.title='Pens';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.pen)
          this.digitizedata = data.pen;


        })
      } else if(url[0].path=='PUNotebooks'){
        this.title='PUNotebooks'
      }else if(url[0].path=='PUOrganizer'){
        this.title='PUOrganizer';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.pen)
          this.digitizedata = data.PUOrganizer;


        })
      }else if(url[0].path=='MousePad'){
        this.title='Mouse Pad';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.pen)
          this.digitizedata = data.MousePad;


        })
      }else if(url[0].path=='TShirt'){
        this.title='T-Shirts';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.pen)
          this.digitizedata = data.TShirt;


        })
      }else if(url[0].path=='Jersey'){
        this.title='Jersey';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.pen)
          this.digitizedata = data.Jersey;


        })
      }else if(url[0].path=='Caps'){
        this.title='Caps';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.pen)
          this.digitizedata = data.Caps;


        })
      }else if(url[0].path=='SafetyVest'){
        this.title='SafetyVest';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.SafetyVest);
          this.digitizedata = data.SafetyVest;


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

