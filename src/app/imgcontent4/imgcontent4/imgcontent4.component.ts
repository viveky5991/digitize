import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { PopupComponent } from '../../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imgcontent4',
  standalone: true,
  imports: [SwiperModule,RouterModule,CommonModule],
  templateUrl: './imgcontent4.component.html',
  styleUrl: './imgcontent4.component.scss'
})
export class Imgcontent4Component  implements OnInit{
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
            if(url[0].path=='Unlit3D'){
        this.title='Unlit 3D';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Unlit3D)
          this.digitizedata = data.Unlit3D;
        })
      } else if(url[0].path=='Frontlit3D'){
        this.title='Frontlit 3D';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Frontlit3D)
          this.digitizedata = data.Frontlit3D;
        })
      }else if(url[0].path=='Backlit3D'){
        this.title='Backlit3D'
      }else if(url[0].path=='Outlit3D'){
        this.title='Outlit3D'
      }else if(url[0].path=='PushThrough3D'){
        this.title='PushThrough3D'
      }else if(url[0].path=='Neon3D'){
        this.title='Neon3D'
      }else{
        this.title='Digitize'
      }
    })
  }
  EnquiryNow() {
    // const dialogRef = this.dialog.open(PopupComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '900px',
    });
    // dialogRef.afterOpened().subscribe(() => {
    //   // Find the dialog container element by class name or any other means if necessary
    //   const dialogContainer = document.querySelector('.mat-dialog-container');
    //   // Check if the element exists
    //   if (dialogContainer) {
    //     // Set the role attribute to 'dialog'
    //     this.renderer.setAttribute(dialogContainer, 'role', 'dialog');
    //   }
    // });
    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog closed');
    });
  }
}

