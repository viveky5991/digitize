import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SwiperOptions } from 'swiper';
import { Animations } from '../../animation';
import { PopupComponent } from '../../popup/popup.component';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

@Component({
  selector: 'app-imgcontent9',
  standalone: true,
  imports: [SwiperModule, CommonModule, RouterModule,],
  templateUrl: './imgcontent9.component.html',
  styleUrl: './imgcontent9.component.scss',
  animations: Animations
})
export class Imgcontent9Component implements OnInit{
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
      if(url[0].path=='Pennant'){
        this.title='Pennant Flags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Pennant)
          this.digitizedata = data.Pennant;
        })
      } else if(url[0].path=='Bunting'){
        this.title='Bunting'
      }else if(url[0].path=='Toothpick'){
        this.title='Toothpick'
      }else if(url[0].path=='Poleflags'){
        this.title='Poleflags'
      }else if(url[0].path=='Handflags'){
        this.title='Handflags'
      }else if(url[0].path=='FinishLine'){
        this.title='FinishLine'
      }else if(url[0].path=='BodyFlags'){
        this.title='BodyFlags'
      }else if(url[0].path=='FanScarf'){
        this.title='FanScarf'
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

