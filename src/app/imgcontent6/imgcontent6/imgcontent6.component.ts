import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Animations } from '../../animation';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { SwiperOptions } from 'swiper';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { PopupComponent } from '../../popup/popup.component';

@Component({
  selector: 'app-imgcontent6',
  standalone: true,
  imports: [SwiperModule,RouterModule,CommonModule],
  templateUrl: './imgcontent6.component.html',
  styleUrl: './imgcontent6.component.scss',
  animations: Animations
})
export class Imgcontent6Component implements OnInit{
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

      if(url[0].path=='SelfStanding'){
        this.title='Self-Standing';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.SelfStanding)
          this.digitizedata = data.SelfStanding;
        })
      } else if(url[0].path=='WallMounted'){
        this.title='Wall Mounted';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.WallMounted)
          this.digitizedata = data.WallMounted;
        })
      }else if(url[0].path=='Hanging'){
        this.title='Hanging';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Hanging)
          this.digitizedata = data.Hanging;
        })
      }else if(url[0].path=='Directory'){
        this.title='Directory';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Directory)
          this.digitizedata = data.Directory;
        })
      }else if(url[0].path=='Metal'){
        this.title='Metal';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Metal)
          this.digitizedata = data.Metal;
        })
      }else if(url[0].path=='Wooden-Letters'){
        this.title='Wooden';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Wooden)
          this.digitizedata = data.Wooden;
        })
      }else if(url[0].path=='AcrylicLetters'){
        this.title='Acrylic';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.AcrylicLetters)
          this.digitizedata = data.AcrylicLetters;
        })
      }else if(url[0].path=='ForexFoam'){
        this.title='Forex / Foam';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.ForexFoam)
          this.digitizedata = data.ForexFoam;
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
