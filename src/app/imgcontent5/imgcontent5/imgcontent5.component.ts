import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Animations } from '../../animation';
import { SwiperOptions } from 'swiper';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../popup/popup.component';
import { SwiperModule } from 'swiper/angular';

@Component({
  selector: 'app-imgcontent5',
  standalone: true,
  imports: [SwiperModule, CommonModule, RouterModule,],
  templateUrl: './imgcontent5.component.html',
  styleUrl: './imgcontent5.component.scss',
  animations: Animations
})
export class Imgcontent5Component implements OnInit{
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
      debugger
      if(url[0].path=='FlexFace'){
      this.title='Flex Face Sign';
      this.httpClient.get<any>("assets/data.json").subscribe((data) => {

        console.log(data.FlexFace)
        this.digitizedata = data.FlexFace;
      })
      } else if(url[0].path=='Frontlit3D'){
        this.title='Frontlit 3D Sign';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.FrontlitSign)
          this.digitizedata = data.FrontlitSign;
        })
      }else if(url[0].path=='Backtlit3D'){
        this.title='Backtlit3D'
      }else if(url[0].path=='PushThrough'){
        this.title='PushThrough'
      }else if(url[0].path=='Neon'){
        this.title='Neon'
      }else if(url[0].path=='FlexFace-LightBox'){
        this.title='FlexFace-LightBox'
      }else if(url[0].path=='Fabric'){
        this.title='Fabric'
      }else if(url[0].path=='Acrylic'){
        this.title='Acrylic'
      }else if(url[0].path=='Poster'){
        this.title='Poster'
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
