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
  selector: 'app-imgcontent18',
  standalone: true,
  imports: [SwiperModule,RouterModule,CommonModule],
  templateUrl: './imgcontent18.component.html',
  styleUrl: './imgcontent18.component.scss',
  animations: Animations
})
export class Imgcontent18Component implements OnInit{
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
      if(url[0].path=='promotion'){
        this.title='Promotion';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.promotion)
          this.digitizedata = data.promotion;
        })
      } else if(url[0].path=='exhibition-counter'){
        this.title='Exhibition Counter';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.exhibitioncounter)
          this.digitizedata = data.exhibitioncounter;
        })
      } else if(url[0].path=='tent-canopy'){
        this.title='Tent Canopy';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.tentcanopy)
          this.digitizedata = data.tentcanopy;
        })
      } else if(url[0].path=='parasol-umbrella'){
        this.title='Parasol Umbrella';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.parasolumbrella)
          this.digitizedata = data.parasolumbrella;
        })
      } else if(url[0].path=='cover-cloth'){
        this.title='Table Cover & Table Cloth';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.covercloth)
          this.digitizedata = data.covercloth;
        })

      } else if(url[0].path=='media-frame'){
        this.title='Social Media Frame';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.mediaframe)
          this.digitizedata = data.mediaframe;
        })
      } else if(url[0].path=='foam-board'){
        this.title='Foam / Forex Boards';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.foamboard)
          this.digitizedata = data.foamboard;
        })
      } else if(url[0].path=='shell-scheme'){
        this.title='Shell Scheme';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.ShellScheme)
          this.digitizedata = data.ShellScheme;
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


