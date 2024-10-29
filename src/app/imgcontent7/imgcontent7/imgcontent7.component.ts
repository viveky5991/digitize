import { Component, OnInit,Inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PopupComponent } from '../../popup/popup.component';
import { CommonModule,DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { Animations } from '../../animation';
import { Location } from '@angular/common';
import { SharedService } from '../../service/shared-service.service';
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
     
    // const dialogRef = this.dialog.open(PopupComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = "550px";
    dialogConfig.data =  {webUrl:this.fullUrl};
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

