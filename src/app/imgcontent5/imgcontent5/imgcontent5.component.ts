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
      } else if(url[0].path=='Frontlit3DBoard'){
        this.title='Frontlit 3D Sign';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.FrontlitSign)
          this.digitizedata = data.FrontlitSign;
        })
      }else if(url[0].path=='Backlit3DBoard'){
        this.title='Backlit 3D Sign';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Backlit3DBoard)
          this.digitizedata = data.Backlit3DBoard;
        })
      }else if(url[0].path=='PushThrough'){
        this.title='Push Through Sign';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.PushThrough)
          this.digitizedata = data.PushThrough;
        })
      }else if(url[0].path=='Neon'){
        this.title='Neon Sign';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Neon)
          this.digitizedata = data.Neon;
        })
      }else if(url[0].path=='FlexFace-LightBox'){
        this.title='Flex Face Light Box';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.FlexFaceLightBox)
          this.digitizedata = data.FlexFaceLightBox;
        })
      }else if(url[0].path=='Fabric'){
        this.title='Fabric Light Box (SEG)';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Fabric)
          this.digitizedata = data.Fabric;
        })
      }else if(url[0].path=='acrylic-light-box'){
        this.title='Acrylic Light Box';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.acrylic_light_box)
          this.digitizedata = data.acrylic_light_box;
        })
      }else if(url[0].path=='Poster'){
        this.title='Poster Light Box';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Poster)
          this.digitizedata = data.Poster;
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
