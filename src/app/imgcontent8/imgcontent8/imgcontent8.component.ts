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
        this.title='LShapeFlags'
      }else if(url[0].path=='BladeFlags'){
        this.title='BladeFlags'
      }else if(url[0].path=='TelescopicFlags'){
        this.title='TelescopicFlags'
      }else if(url[0].path=='CarFlags'){
        this.title='CarFlags'
      }else if(url[0].path=='CarDesert'){
        this.title='CarDesert'
      }else if(url[0].path=='Dashboard'){
        this.title='Dashboard'
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
