import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PopupComponent } from '../../popup/popup.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { Animations } from '../../animation';

@Component({
  selector: 'app-imgcontent7',
  standalone: true,
  imports: [SwiperModule,RouterModule,CommonModule],
  templateUrl: './imgcontent7.component.html',
  styleUrl: './imgcontent7.component.scss',
  animations: Animations
})
export class Imgcontent7Component implements OnInit{
  title: string | undefined;

  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  digitizedata: any;
  constructor( public _router: Router, private _route: ActivatedRoute,  private httpClient: HttpClient,public dialog: MatDialog) { }
  ngOnInit(): void {

    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {

      if(url[0].path=='MetalPlates'){
        this.title='Metal Plates';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.MetalPlates)
          this.digitizedata = data.MetalPlates;
        })
      } else if(url[0].path=='AcrylicPlates'){
        this.title='Acrylic Plates';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.AcrylicPlates)
          this.digitizedata = data.AcrylicPlates;
        })
      }else if(url[0].path=='WoodenPlates'){
        this.title='Wooden Plates';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.WoodenPlates)
          this.digitizedata = data.WoodenPlates;
        })
      }else if(url[0].path=='TableTopPlates'){
        this.title='Table Top Plates Or Sign';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.TableTopPlates)
          this.digitizedata = data.TableTopPlates;
        })
      }else if(url[0].path=='TraffolytePVCAcrylic'){
        this.title='Traffolyte or PVC or Acrylic Labels';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.TraffolytePVCAcrylic)
          this.digitizedata = data.TraffolytePVCAcrylic;
        })
      }else if(url[0].path=='MetalLabels'){
        this.title='Metal Labels';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.MetalLabels)
          this.digitizedata = data.MetalLabels;
        })
      }else if(url[0].path=='WoodenLabels'){
        this.title='Wooden Labels';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.WoodenLabels)
          this.digitizedata = data.WoodenLabels;
        })
      }else if(url[0].path=='AcrylicLabels'){
        this.title='Acrylic Labels';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.AcrylicLabels)
          this.digitizedata = data.AcrylicLabels;
        })
      }else{
        this.title='Digitize'
      }
    })
  }
  EnquiryNow() {

    const dialogRef = this.dialog.open(PopupComponent, {
      width: '900px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog closed');
    });
  }
}

