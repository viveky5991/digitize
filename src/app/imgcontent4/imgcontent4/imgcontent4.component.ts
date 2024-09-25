import { Component, OnInit,Inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { PopupComponent } from '../../popup/popup.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { CommonModule,DOCUMENT } from '@angular/common';
import { Animations } from '../../animation';
import { Location } from '@angular/common';
import { SharedService } from '../../service/shared-service.service';
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
  fullUrl: any;
  constructor(public _router: Router, private _route: ActivatedRoute, private httpClient: HttpClient, public dialog: MatDialog, private location: Location, @Inject(DOCUMENT) private document: Document, private Shared:SharedService) { }
  ngOnInit(): void {

    this.navload()
  }
  getFullUrl() {
   
    return this.document.location.href;
  }
  navload(){
    this.fullUrl = this.getFullUrl();
    console.log(this.fullUrl)
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
      } else if (url[0].path == 'Mounted-Posters') {
        this.title = 'Mounted Posters';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.mountedposters)
          this.digitizedata = data.mountedposters;
        })
      } else if (url[0].path == 'Posters') {
        this.title = 'Posters';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.posters)
          this.digitizedata = data.posters;
        })
      } else {
        this.title = 'Digitize'
      }
    })
  }
  EnquiryNow() {
    debugger
    // const dialogRef = this.dialog.open(PopupComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = "550px";
    dialogConfig.data = {webUrl:this.fullUrl};
    const dialogRef = this.dialog.open(PopupComponent, dialogConfig);
    // dialogRef.afterOpened().subscribe(() => {
    //   // Find the dialog container element by class name or any other means if necessary
    //   const dialogContainer = document.querySelector('.mat-dialog-container');
    //   // Check if the element exists
    //   if (dialogContainer) {
    //     // Set the role attribute to 'dialog'
    //     this.renderer.setAttribute(dialogContainer, 'role', 'dialog');
    //   }
    // });
    dialogRef.afterClosed().subscribe({
      next: (result) => {
        console.log(`Dialog result: ${result}`);
      },
      error: (error) => {
        console.error('Error occurred while opening the dialog:', error);
      }
    });
  }
}

