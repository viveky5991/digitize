import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SwiperOptions } from 'swiper';
import { PopupComponent } from '../../popup/popup.component';
import { SwiperModule } from 'swiper/angular';
import { Animations } from '../../animation';
import { Location } from '@angular/common';
import { CommonModule,DOCUMENT } from '@angular/common';
import { Component, OnInit,Inject } from '@angular/core';
@Component({
  selector: 'app-imgcontent13',
  standalone: true,
  imports: [SwiperModule,RouterModule,CommonModule],
  templateUrl: './imgcontent13.component.html',
  styleUrl: './imgcontent13.component.scss',
  animations: Animations
})
export class Imgcontent13Component implements OnInit{
  title: string | undefined;
  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  digitizedata: any;
  fullUrl: any;
  constructor( public _router: Router, private _route: ActivatedRoute,  private httpClient: HttpClient,public dialog: MatDialog, private location: Location, @Inject(DOCUMENT) private document: Document) { }
  ngOnInit(): void {

    this.navload()
  }
  getFullUrl() {
    const protocol = this.document.location.protocol;
    const host = this.document.location.host;
    const path = this.location.prepareExternalUrl(this.location.path());
    return `${protocol}//${host}${path}`;
  }
  navload(){
    this.fullUrl = this.getFullUrl();
    console.log(this.fullUrl)
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='Paperbag'){
        this.title='Paper Bags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.PaperBags)
          this.digitizedata = data.PaperBags;
        })
      } else if(url[0].path=='Kraftbag'){
        this.title='Kraft Bags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Kraftbag)
          this.digitizedata = data.Kraftbag;
        })
      }else if(url[0].path=='NonWovenbag'){
        this.title='Non Woven Bags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.NonWovenbag)
          this.digitizedata = data.NonWovenbag;
        })
      }else if(url[0].path=='Jutebag'){
        this.title='Jute Bags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Jutebag)
          this.digitizedata = data.Jutebag;
        })
      }else if(url[0].path=='Totebag'){
        this.title='Tote Bags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Totebag)
          this.digitizedata = data.Totebag;
        })
      }else if(url[0].path=='Canvasbag'){
        this.title='Canvas Bags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Canvasbag)
          this.digitizedata = data.Canvasbag;
        })
      }else if(url[0].path=='Drawstringbag'){
        this.title='Drawstring Bags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Drawstringbag)
          this.digitizedata = data.Drawstringbag;
        })
      }else if(url[0].path=='CottonStringbag'){
        this.title='Cotton String Bags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.CottonStringbag)
          this.digitizedata = data.CottonStringbag;
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
    dialogConfig.data = this.fullUrl;
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

