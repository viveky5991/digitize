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
  selector: 'app-imgcontent18',
  standalone: true,
  imports: [SwiperModule,RouterModule,CommonModule],
  templateUrl: './imgcontent18.component.html',
  styleUrl: './imgcontent18.component.scss',
  animations: Animations
})
export class Imgcontent18Component implements OnInit{
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
      if(url[0].path=='promotion'){
        this.title='promotion';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.promotion)
          this.digitizedata = data.promotion;
        })
      } else if(url[0].path=='exhibition-counter'){
        this.title='exhibition-counter';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.exhibitioncounter)
          this.digitizedata = data.exhibitioncounter;
        })
      } else if(url[0].path=='tent-canopy'){
        this.title='tent-canopy';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.tentcanopy)
          this.digitizedata = data.tentcanopy;
        })
      } else if(url[0].path=='parasol-umbrella'){
        this.title='parasol-umbrella';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.parasolumbrella)
          this.digitizedata = data.parasolumbrella;
        })
      } else if(url[0].path=='cover-cloth'){
        this.title='Table Cover & Table Cloth';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.covercloth)
          this.digitizedata = data.covercloth;
        })

      } else if(url[0].path=='media-frame'){
        this.title='Social Media Frame';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.mediaframe)
          this.digitizedata = data.mediaframe;
        })
      } else if(url[0].path=='foam-board'){
        this.title='Foam / Forex Boards';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.foamboard)
          this.digitizedata = data.foamboard;
        })
      } else if(url[0].path=='shell-scheme'){
        this.title='Shell Scheme';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.ShellScheme)
          this.digitizedata = data.ShellScheme;
        })
      } else if(url[0].path=='flag-base'){
        this.title='flag-base'
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


