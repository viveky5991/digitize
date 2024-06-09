import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { Animations } from '../../animation';
import { PopupComponent } from '../../popup/popup.component';

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
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  digitizedata: any;
  constructor( public _router: Router, private _route: ActivatedRoute,private httpClient: HttpClient,public dialog: MatDialog) { }
  ngOnInit(): void {

    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {

      if(url[0].path=='selfink-stamps'){
        this.title='Self Ink';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.selfink_stamps)
          this.digitizedata = data.selfink_stamps;


        })
      } else if(url[0].path=='wax-seal'){
        this.title='Wax-Seal';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Wax_Seal)
          this.digitizedata = data.Wax_Seal;


        })
      }else if(url[0].path=='embossing-seal'){
        this.title='Embossing-Seal';
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
        this.title='Compliment-Slips';
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
        this.title='Tent-Cards';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.tent_cards)
          this.digitizedata = data.tent_cards;
        })
      }else{
        this.title='Digitize'
      }
    })
  }
  EnquiryNow() {

    const dialogRef = this.dialog.open(PopupComponent, {
      width: '700px',
      height:'620px'
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog closed');
    });
  }
}
