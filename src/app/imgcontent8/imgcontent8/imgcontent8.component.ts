import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { Animations } from '../../animation';
import { PopupComponent } from '../../popup/popup.component';

@Component({
  selector: 'app-imgcontent8',
  standalone: true,
  imports: [SwiperModule,RouterModule,CommonModule],
  templateUrl: './imgcontent8.component.html',
  styleUrl: './imgcontent8.component.scss',
  animations: Animations
})
export class Imgcontent8Component implements OnInit{
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
      if(url[0].path=='SailFlags'){
        this.title='Sail Flags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.SailFlags)
          this.digitizedata = data.SailFlags;
        })
      } else if(url[0].path=='TearDropFlags'){
        this.title='Tear Drop';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.TearDropFlags)
          this.digitizedata = data.TearDropFlags;
        })
      }else if(url[0].path=='LShapeFlags'){
        this.title='L Shape Flags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.LShapeFlags)
          this.digitizedata = data.LShapeFlags;
        })
      }else if(url[0].path=='BladeFlags'){
        this.title='Blade Flags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.BladeFlags)
          this.digitizedata = data.BladeFlags;
        })
      }else if(url[0].path=='TelescopicFlags'){
        this.title='Telescopic Flags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.TelescopicFlags)
          this.digitizedata = data.TelescopicFlags;
        })
      }else if(url[0].path=='CarFlags'){
        this.title='Car Flags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.CarFlags)
          this.digitizedata = data.CarFlags;
        })
      }else if(url[0].path=='CarDesert'){
        this.title='Car Desert';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.CarDesert)
          this.digitizedata = data.CarDesert;
        })
      }else if(url[0].path=='Dashboard'){
        this.title='Dashboard Flags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Dashboard)
          this.digitizedata = data.Dashboard;
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
