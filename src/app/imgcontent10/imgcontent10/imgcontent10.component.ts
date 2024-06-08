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
  selector: 'app-imgcontent10',
  standalone: true,
  imports: [SwiperModule,RouterModule,CommonModule],
  templateUrl: './imgcontent10.component.html',
  styleUrl: './imgcontent10.component.scss',
  animations: Animations
})
export class Imgcontent10Component implements OnInit{
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

      if(url[0].path=='Hoisting'){
        this.title='Hoisting';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Hoisting)
          this.digitizedata = data.Hoisting;
        })
      } else if(url[0].path=='WallMounted'){
        this.title='WallMounted';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Hoisting)
          this.digitizedata = data.Hoisting;
        })
      }else if(url[0].path=='Stadium'){
        this.title='Stadium'
      }else if(url[0].path=='Advertising'){
        this.title='Advertising'
      }else if(url[0].path=='Festival'){
        this.title='Festival'
      }else if(url[0].path=='TableFlags'){
        this.title='TableFlags'
      }else if(url[0].path=='TableFlagsRoyal'){
        this.title='TableFlagsRoyal'
      }else if(url[0].path=='ConferenceFlags'){
        this.title='ConferenceFlags'
      }else if(url[0].path=='ConferenceFlagsHanging'){
        this.title='ConferenceFlagsHanging'
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

