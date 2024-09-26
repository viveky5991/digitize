import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SwiperOptions } from 'swiper';
import { Animations } from '../../animation';
import { PopupComponent } from '../../popup/popup.component';
import { CommonModule,DOCUMENT } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { Location } from '@angular/common';
import { SharedService } from '../../service/shared-service.service';

@Component({
  selector: 'app-imgcontent9',
  standalone: true,
  imports: [SwiperModule, CommonModule, RouterModule,],
  templateUrl: './imgcontent9.component.html',
  styleUrl: './imgcontent9.component.scss',
  animations: Animations
})
export class Imgcontent9Component implements OnInit{
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
      debugger
      if(url[0].path=='Pennant'){
        this.title='Pennant Flags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Pennant)
          this.digitizedata = data.Pennant;
        })
      } else if(url[0].path=='Bunting'){
        this.title='Bunting';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Bunting)
          this.digitizedata = data.Bunting;
        })
      }else if(url[0].path=='Toothpick'){
        this.title='Toothpick';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Toothpick)
          this.digitizedata = data.Toothpick;
        })
      }else if(url[0].path=='Poleflags'){
        this.title='Pole Flags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Poleflags)
          this.digitizedata = data.Poleflags;
        })
      }else if(url[0].path=='Handflags'){
        this.title='Hand Flags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Handflags)
          this.digitizedata = data.Handflags;
        })
      }else if(url[0].path=='FinishLine'){
        this.title='Finish Line';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.FinishLine)
          this.digitizedata = data.FinishLine;
        })
      }else if(url[0].path=='BodyFlags'){
        this.title='Body Flags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.BodyFlags)
          this.digitizedata = data.BodyFlags;
        })
      }else if(url[0].path=='FanScarf'){
        this.title='Fan Scarf';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.FanScarf)
          this.digitizedata = data.FanScarf;
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

