import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PopupComponent } from '../../popup/popup.component';
import { Location } from '@angular/common';
import { CommonModule,DOCUMENT } from '@angular/common';
import { Component, OnInit,Inject } from '@angular/core';
import { SharedService } from '../../service/shared-service.service';
import { SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { Animations } from '../../animation';
@Component({
  selector: 'app-imgcontent15',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule, SwiperModule],
  templateUrl: './imgcontent15.component.html',
  styleUrl: './imgcontent15.component.scss',
  animations: Animations
})
export class Imgcontent15Component implements OnInit{
  title: string | undefined;
  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 50,
    autoplay:true,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  digitizedata: any;
  fullUrl: any;
  constructor( public _router: Router, private _route: ActivatedRoute,  private httpClient: HttpClient,public dialog: MatDialog, private location: Location, @Inject(DOCUMENT) private document: Document,  private Shared:SharedService) { }
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
       
      if(url[0].path=='magnetic'){
        this.title='Magnetic';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.magnetic)
          this.digitizedata = data.magnetic;
        })

      } else if(url[0].path=='ceremonial'){
        this.title='Ceremonial Ribbon';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.ceremonial)
          this.digitizedata = data.ceremonial;
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

