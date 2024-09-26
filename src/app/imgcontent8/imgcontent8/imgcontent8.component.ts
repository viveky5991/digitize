import { CommonModule,DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { Animations } from '../../animation';
import { PopupComponent } from '../../popup/popup.component';
import { Location } from '@angular/common';
import { SharedService } from '../../service/shared-service.service';
@Component({
  selector: 'app-imgcontent8',
  standalone: true,
  imports: [SwiperModule,RouterModule,CommonModule],
  templateUrl: './imgcontent8.component.html',
  styleUrl: './imgcontent8.component.scss',
  animations: Animations
})
export class Imgcontent8Component implements OnInit{
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
      if(url[0].path=='CurvedFlags'){
        this.title='Curved Top Flags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.CurvedFlags)
          this.digitizedata = data.CurvedFlags;
        })
      } else if(url[0].path=='TearDropFlags'){
        this.title='Tear Drop';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.TearDropFlags)
          this.digitizedata = data.TearDropFlags;
        })
      }else if(url[0].path=='LShapeFlags'){
        this.title='L Shape Flags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.LShapeFlags)
          this.digitizedata = data.LShapeFlags;
        })
      }else if(url[0].path=='BladeFlags'){
        this.title='Blade Flags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.BladeFlags)
          this.digitizedata = data.BladeFlags;
        })
      }else if(url[0].path=='TelescopicFlags'){
        this.title='Telescopic Flags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.TelescopicFlags)
          this.digitizedata = data.TelescopicFlags;
        })
      }else if(url[0].path=='CarFlags'){
        this.title='Car Flags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.CarFlags)
          this.digitizedata = data.CarFlags;
        })
      }else if(url[0].path=='CarDesert'){
        this.title='Car Desert';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.CarDesert)
          this.digitizedata = data.CarDesert;
        })
      }else if(url[0].path=='Dashboard'){
        this.title='Dashboard Flags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Dashboard)
          this.digitizedata = data.Dashboard;
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
    dialogConfig.data =  {webUrl:this.fullUrl};
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
