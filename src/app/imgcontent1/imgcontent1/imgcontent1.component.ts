import { CommonModule, DOCUMENT } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component,Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { Animations } from '../../animation';
import { PopupComponent } from '../../popup/popup.component';
import { Location } from '@angular/common';
import { SharedService } from '../../service/shared-service.service';
@Component({
  selector: 'app-imgcontent1',
  standalone: true,
  imports: [HttpClientModule, CommonModule,RouterModule,SwiperModule],
  templateUrl: './imgcontent1.component.html',
  styleUrl: './imgcontent1.component.scss',
  animations: Animations
})
export class Imgcontent1Component implements OnInit{
  title: string | undefined;
  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 50,
    navigation: true,
    autoplay:true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  digitizedata: any;
  fullUrl: any;
  constructor( public _router: Router, private _route: ActivatedRoute,private httpClient: HttpClient,public dialog: MatDialog, private location: Location, @Inject(DOCUMENT) private document: Document, private Shared:SharedService) { }
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

      if(url[0].path=='selfink-stamps'){
        this.title='Self Ink';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.selfink_stamps)
          this.digitizedata = data.selfink_stamps;


        })
      } else if(url[0].path=='wax-seal'){
        this.title='Wax Seal';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Wax_Seal)
          this.digitizedata = data.Wax_Seal;


        })
      }else if(url[0].path=='embossing-seal'){
        this.title='Embossing Seal';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Embossing_Seal)
          this.digitizedata = data.Embossing_Seal;


        })
      }else if(url[0].path=='flyers'){
        this.title='The Flyers';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Flyers)
          this.digitizedata = data.Flyers;


        })
      }else if(url[0].path=='compliment-slips'){
        this.title='Compliment Slips';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.compliment_slips)
          this.digitizedata = data.compliment_slips;


        })
      }else if(url[0].path=='Coupons'){
        this.title='Tickets | Coupons | Vouchers' ;
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.coupons)
          this.digitizedata = data.coupons;
        })
      }else if(url[0].path=='Tent-Cards'){
        this.title='Tent Cards';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.tent_cards)
          this.digitizedata = data.tent_cards;
        })
      }else if(url[0].path=='Lanyards'){
        this.title='Lanyards';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Lanyards)
          this.digitizedata = data.Lanyards;
        })
      }else if(url[0].path=='Paper-Bags'){
        this.title='Paper Bags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Paper_Bags)
          this.digitizedata = data.Paper_Bags;
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
    // dialogRef.afterClosed().subscribe({
    //   next: (result) => {
    //     console.log(`Dialog result: ${result}`);
    //   },
    //   error: (error) => {
    //     console.error('Error occurred while opening the dialog:', error);
    //   }
    // });
  }
}

