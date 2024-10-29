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
  selector: 'app-imgcontent12',
  standalone: true,
  imports: [SwiperModule,RouterModule,CommonModule],
  templateUrl: './imgcontent12.component.html',
  styleUrl: './imgcontent12.component.scss',
  animations: Animations
})
export class Imgcontent12Component implements OnInit{
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
      
      if(url[0].path=='Wristband'){
        this.title='Tyvek Wristbands';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Wristband)
          this.digitizedata = data.Wristband;
        })
      } else if(url[0].path=='NameBadges'){
        this.title='Badges';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Badges)
          this.digitizedata = data.Badges;
        })
      }else if(url[0].path=='Lanyards'){
        this.title='Lanyards';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Lanyards)
          this.digitizedata = data.Lanyards;
        })
      }else if(url[0].path=='IDCardsBadgeReel'){
        this.title='ID Cards & Badge Reel';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.IDCardsBadgeReel)
          this.digitizedata = data.IDCardsBadgeReel;
        })
      }else if(url[0].path=='Keychain'){
        this.title='Customized Keychain';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Lanyards)
          this.digitizedata = data.Keychain;
        })
      }else if(url[0].path=='Mugs'){
        this.title='Mugs';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Mugs)
          this.digitizedata = data.Mugs;
        })
      }else if(url[0].path=='Bottles'){
        this.title='Bottles';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Bottles)
          this.digitizedata = data.Bottles;
        })
      }else if(url[0].path=='Tumblers'){
        this.title='Tumblers';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Tumblers)
          this.digitizedata = data.Tumblers;
        })
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

