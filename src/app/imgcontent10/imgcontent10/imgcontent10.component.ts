import { CommonModule,DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { Animations } from '../../animation';
import { PopupComponent } from '../../popup/popup.component';
import { Location } from '@angular/common';
import { SharedService } from '../../service/shared-service.service';
@Component({
  selector: 'app-imgcontent10',
  standalone: true,
  imports: [SwiperModule,RouterModule,CommonModule],
  templateUrl: './imgcontent10.component.html',
  styleUrl: './imgcontent10.component.scss',
  animations: Animations
})
export class Imgcontent10Component implements OnInit{
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
  constructor( public _router: Router, private _route: ActivatedRoute,  private httpClient: HttpClient,public dialog: MatDialog, private location: Location, @Inject(DOCUMENT) private document: Document, private Shared:SharedService) { }
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

      if(url[0].path=='Hoisting'){
        this.title='Hoisting';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Hoisting)
          this.digitizedata = data.Hoisting;
        })
      } else if(url[0].path=='wall_mounted_flags'){
        this.title='Wall Mounted Flags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.WallMountedflag)
          this.digitizedata = data.WallMountedflag;
        })
      }else if(url[0].path=='Stadium'){
        this.title='Stadium Flags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Stadium)
          this.digitizedata = data.Stadium;
        })
      }else if(url[0].path=='Advertising'){
        this.title='Advertising Flags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Advertising)
          this.digitizedata = data.Advertising;
        })
      }else if(url[0].path=='Festival'){
        this.title='Festival Flags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Festival)
          this.digitizedata = data.Festival;
        })
      }else if(url[0].path=='TableFlags'){
        this.title='Table Flags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.TableFlags)
          this.digitizedata = data.TableFlags;
        })
      }else if(url[0].path=='TableFlagsRoyal'){
        this.title='Table Flags - Royal';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.TableFlagsRoyal)
          this.digitizedata = data.TableFlagsRoyal;
        })
      }else if(url[0].path=='ConferenceFlags'){
        this.title='Conference Flags';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.ConferenceFlags)
          this.digitizedata = data.ConferenceFlags;
        })
      }else if(url[0].path=='ConferenceFlagsHanging'){
        this.title='Conference Flags - Hanging';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.ConferenceFlagsHanging)
          this.digitizedata = data.ConferenceFlagsHanging;
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

