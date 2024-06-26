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
  selector: 'app-imgcontent16',
  standalone: true,
  imports: [SwiperModule,RouterModule,CommonModule],
  templateUrl: './imgcontent16.component.html',
  styleUrl: './imgcontent16.component.scss',
  animations: Animations
})
export class Imgcontent16Component  implements OnInit{
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
      if(url[0].path=='popups'){
        this.title='Pop Up Softcase';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.popups)
          this.digitizedata = data.popups;
        })
      } else if(url[0].path=='fabric-popups'){
        this.title='Fabric Popups';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.fabricpopups)
          this.digitizedata = data.fabricpopups;
        })
      }else if(url[0].path=='rollup-banners'){
        this.title='ROLL UP BANNER';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.rollupbanners)
          this.digitizedata = data.rollupbanners;
        })
      }else if(url[0].path=='x-banners'){
        this.title='X Banners';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.xbanners)
          this.digitizedata = data.xbanners;
        })
      }else if(url[0].path=='banners-flex'){
        this.title='Banners Flex'; 
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.bannersflex)
          this.digitizedata = data.bannersflex;
        }) 
      }else if(url[0].path=='fence-banners'){
        this.title='Fence Banners';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.fencebanners)
          this.digitizedata = data.fencebanners;
        })
      }else if(url[0].path=='lama-stand'){
        this.title='Lama Stand Display';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.lamastand)
          this.digitizedata = data.lamastand;
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

