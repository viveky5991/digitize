import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { PopupComponent } from '../../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Animations } from '../../animation';

@Component({
  selector: 'app-imgcontent4',
  standalone: true,
  imports: [SwiperModule, RouterModule, CommonModule],
  templateUrl: './imgcontent4.component.html',
  styleUrl: './imgcontent4.component.scss',
  animations: Animations
})
export class Imgcontent4Component implements OnInit {
  title: string | undefined;
  config: SwiperOptions = {
    loop: false,
    allowTouchMove: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      clickable: true
    },
    navigation: true,
    slidesPerView: 1,
    spaceBetween: 50,
    scrollbar: {
      draggable: true
    }
  };
  digitizedata: any;
  constructor(public _router: Router, private _route: ActivatedRoute, private httpClient: HttpClient, public dialog: MatDialog) { }
  ngOnInit(): void {

    this.navload()
  }
  navload() {
    this._route.url.subscribe((url: any) => {
      if (url[0].path == 'Unlit3D') {
        this.title = 'Unlit 3D';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Unlit3D)
          this.digitizedata = data.Unlit3D;
        })
      } else if (url[0].path == 'Frontlit3D') {
        this.title = 'Frontlit 3D';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Frontlit3D)
          this.digitizedata = data.Frontlit3D;
        })
      } else if (url[0].path == 'Backlit3D') {
        this.title = 'Backlit 3D';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Backlit3D)
          this.digitizedata = data.Backlit3D;
        })
      } else if (url[0].path == 'Outlit3D') {
        this.title = 'Outlit 3D';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Outlit3D)
          this.digitizedata = data.Outlit3D;
        })
      } else if (url[0].path == 'PushThrough3D') {
        this.title = 'Push Through 3D';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.PushThrough3D)
          this.digitizedata = data.PushThrough3D;
        })
      } else if (url[0].path == 'Neon3D') {
        this.title = 'Neon 3D';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Neon3D)
          this.digitizedata = data.Neon3D;
        })
      } else {
        this.title = 'Digitize'
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

