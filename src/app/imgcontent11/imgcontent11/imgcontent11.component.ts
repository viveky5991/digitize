
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { Animations } from '../../animation';
import { PopupComponent } from '../../popup/popup.component';
import { Location } from '@angular/common';
import { CommonModule,DOCUMENT } from '@angular/common';
import { Component, OnInit,Inject } from '@angular/core';
@Component({
  selector: 'app-imgcontent11',
  standalone: true,
  imports: [SwiperModule, CommonModule,RouterModule],
  templateUrl: './imgcontent11.component.html',
  styleUrl: './imgcontent11.component.scss',
  animations: Animations
})
export class Imgcontent11Component implements OnInit{
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
      if(url[0].path=='Pens'){
        this.title='Pens';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.pen)
          this.digitizedata = data.pen;


        })
      } else if(url[0].path=='PUNotebooks'){
        this.title='PU Notebooks';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.PUNotebooks)
          this.digitizedata = data.PUNotebooks;


        })
      }else if(url[0].path=='PUOrganizer'){
        this.title='PU Organizer';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.pen)
          this.digitizedata = data.PUOrganizer;


        })
      }else if(url[0].path=='MousePad'){
        this.title='Mouse Pad';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.pen)
          this.digitizedata = data.MousePad;


        })
      }else if(url[0].path=='TShirt'){
        this.title='T-Shirts';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.pen)
          this.digitizedata = data.TShirt;


        })
      }else if(url[0].path=='Jersey'){
        this.title='Jersey';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.pen)
          this.digitizedata = data.Jersey;


        })
      }else if(url[0].path=='Caps'){
        this.title='Caps';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.pen)
          this.digitizedata = data.Caps;


        })
      }else if(url[0].path=='SafetyVest'){
        this.title='Safety Vest';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.SafetyVest);
          this.digitizedata = data.SafetyVest;


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

