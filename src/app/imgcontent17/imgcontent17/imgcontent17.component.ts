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
  selector: 'app-imgcontent17',
  standalone: true,
  imports: [SwiperModule,RouterModule,CommonModule],
  templateUrl: './imgcontent17.component.html',
  styleUrl: './imgcontent17.component.scss',
  animations: Animations
})
export class Imgcontent17Component  implements OnInit{
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
      if(url[0].path=='wooden-backdrop'){
        this.title='Wooden Frame Backdrop';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.woodenbackdrop)
          this.digitizedata = data.woodenbackdrop;
        })
      } else if(url[0].path=='repeat-backdrop'){
        this.title='Step and Repeat Backdrop';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.repeatbackdrop)
          this.digitizedata = data.repeatbackdrop;
        })
      } else if(url[0].path=='backdrop-indoor'){
        this.title='Fabric Backdrop Seamless (Indoor)';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.backdropindoor)
          this.digitizedata = data.backdropindoor;
        })
      } else if(url[0].path=='backdrop-outdoor'){
        this.title='Fabric Backdrop Seamless (Outdoor)';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.backdropoutdoor)
          this.digitizedata = data.backdropoutdoor;
        })
      } else if(url[0].path=='popout-banner'){
        this.title='Pop Out Banner';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.popoutbanner)
          this.digitizedata = data.popoutbanner;
        })
      } else if(url[0].path=='toblerone-frame'){
        this.title='Toblerone - Fabric';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.tobleroneframe)
          this.digitizedata = data.tobleroneframe;
        })
      } else if(url[0].path=='cutout-standee'){
        this.title='Foam Board Cutout Standee';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.cutoutstandee)
          this.digitizedata = data.cutoutstandee;
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

