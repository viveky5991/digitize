import { CommonModule,DOCUMENT } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit,Inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Animations } from '../../animation';
import { SwiperOptions } from 'swiper';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopupComponent } from '../../popup/popup.component';
import { SwiperModule } from 'swiper/angular';
import { Location } from '@angular/common';
import { SharedService } from '../../service/shared-service.service';
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

    // const dialogRef = this.dialog.open(PopupComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = "550px";
    dialogConfig.data ={webUrl:this.fullUrl};
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
