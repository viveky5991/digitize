import { CommonModule, DOCUMENT } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component,Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PopupComponent } from '../../popup/popup.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
SwiperCore.use([Pagination, EffectCoverflow]);
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  SwiperOptions,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
  Swiper,
  EffectCoverflow,

} 
from 'swiper';
import { SharedService } from '../../service/shared-service.service';
@Component({
  selector: 'app-imgcontent3',
  standalone: true,
  imports: [SwiperModule,HttpClientModule, CommonModule, RouterModule,],
  templateUrl: './imgcontent3.component.html',
  styleUrl: './imgcontent3.component.scss'
})


export class Imgcontent3Component  implements OnInit{
  title: string | undefined;
  digitizedata: any;
  fullUrl: any;
  constructor( public _router: Router, private _route: ActivatedRoute,  private httpClient: HttpClient,public dialog: MatDialog, private location: Location, @Inject(DOCUMENT) private document: Document, private Shared:SharedService) { }
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
      if(url[0].path=='Window-Vinyl'){
        this.title='Vinyl Lettering';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.window_vinyl)
          this.digitizedata = data.window_vinyl;
        })
      } else if(url[0].path=='Window-Graphics'){
        this.title='Window-Graphics';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Window_Graphics)
          this.digitizedata = data.Window_Graphics;
        })
      }else if(url[0].path=='OneWay-Vision'){
        this.title='One Way Vision Sticker';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.OneWay_Vision)
          this.digitizedata = data.OneWay_Vision;
        })
      }else if(url[0].path=='Wall-Vinyl'){
        this.title='Wall Vinyl Lettering';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Wall_Vinyl)
          this.digitizedata = data.Wall_Vinyl;
        })
      }else if(url[0].path=='Wall-Graphics'){
        this.title='Wall-Graphics';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Wall_Graphics)
          this.digitizedata = data.Wall_Graphics;
        })
      }else if(url[0].path=='Canvas'){
        this.title='Canvas';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.canvas)
          this.digitizedata = data.canvas;
        })
      }else if(url[0].path=='Wooden'){
        this.title='Wooden';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.wooden)
          this.digitizedata = data.wooden;
        })
      }else if(url[0].path=='Acrylic'){
        this.title='Acrylic';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.acrylic)
          this.digitizedata = data.acrylic;
        })
      }else if(url[0].path=='MetalArt'){
        this.title='Metal Art';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.metal_art)
          this.digitizedata = data.metal_art;
        })
      }else{
        this.title='Digitize'
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

