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
  selector: 'app-imgcontent12',
  standalone: true,
  imports: [SwiperModule,RouterModule,CommonModule],
  templateUrl: './imgcontent12.component.html',
  styleUrl: './imgcontent12.component.scss',
  animations: Animations
})
export class Imgcontent12Component implements OnInit{
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
      
      if(url[0].path=='Wristband'){
        this.title='Tyvek Wristbands';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Wristband)
          this.digitizedata = data.Wristband;
        })
      } else if(url[0].path=='NameBadges'){
        this.title='Badges';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Badges)
          this.digitizedata = data.Badges;
        })
      }else if(url[0].path=='Lanyards'){
        this.title='Lanyards';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Lanyards)
          this.digitizedata = data.Lanyards;
        })
      }else if(url[0].path=='IDCardsBadgeReel'){
        this.title='ID Cards & Badge Reel';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.IDCardsBadgeReel)
          this.digitizedata = data.IDCardsBadgeReel;
        })
      }else if(url[0].path=='Keychain'){
        this.title='Customized Keychain';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Lanyards)
          this.digitizedata = data.Keychain;
        })
      }else if(url[0].path=='Mugs'){
        this.title='Mugs';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Mugs)
          this.digitizedata = data.Mugs;
        })
      }else if(url[0].path=='Bottles'){
        this.title='Bottles';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Bottles)
          this.digitizedata = data.Bottles;
        })
      }else if(url[0].path=='Tumblers'){
        this.title='Tumblers';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Tumblers)
          this.digitizedata = data.Tumblers;
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

