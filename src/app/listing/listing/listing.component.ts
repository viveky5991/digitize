import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../service/shared-service.service';
import { PopupComponent } from '../../popup/popup.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent implements OnInit{
  title: string | undefined;
  digitizedata: any;
  contentinfo: any;
  constructor(public _router: Router, private _route: ActivatedRoute, private service: SharedService, private httpClient: HttpClient,public dialog: MatDialog,private metaService: Meta, private titleService: Title) { }
  ngOnInit(): void {

    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='wind-shield'){
        this.title='Windshield Stickers';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.wind_shield)
          this.digitizedata = data.wind_shield;
          this.digitizedata.forEach((element: any) => {
            if(element.PrintingInformation){
              this.contentinfo=[element]
              console.log(this.contentinfo)
              this.titleService.setTitle('Windshield Stickers');
              this.metaService.updateTag({ name: 'description', content: 'Windshield Stickers' });
              this.metaService.updateTag({ property: 'og:title', content: 'Windshield Stickers' });
            }
          });
          // if (data.businesscard.length > 5) {
          //   this.contentinfo = data.businesscard[5].PrintingInformation;
          //   console.log(this.contentinfo);
          // } else {
          //   console.log("Not enough data in businesscard array.");
          // }

        })
      } else if(url[0].path=='helmet'){
        this.title='Helmet Stickers';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.helmet)
          this.digitizedata = data.helmet;
          this.digitizedata.forEach((element: any) => {
            if(element.PrintingInformation){
              this.contentinfo=[element]
              console.log(this.contentinfo)
              this.titleService.setTitle('Helmet Stickers');
              this.metaService.updateTag({ name: 'description', content: 'Helmet Stickers' });
              this.metaService.updateTag({ property: 'og:title', content: 'Helmet Stickers' });
            }
          });
          // if (data.businesscard.length > 5) {
          //   this.contentinfo = data.businesscard[5].PrintingInformation;
          //   console.log(this.contentinfo);
          // } else {
          //   console.log("Not enough data in businesscard array.");
          // }

        })
      } else if(url[0].path=='floor-stickers'){
        this.title='Floor Graphics Stickers';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.helmet)
          this.digitizedata = data.floor_stickers;
          this.digitizedata.forEach((element: any) => {
            if(element.PrintingInformation){
              this.contentinfo=[element]
              console.log(this.contentinfo)
              this.titleService.setTitle('Floor Graphics Stickers');
              this.metaService.updateTag({ name: 'description', content: 'Floor Graphics Stickers' });
              this.metaService.updateTag({ property: 'og:title', content: 'Floor Graphics Stickers' });
            }
          });
          // if (data.businesscard.length > 5) {
          //   this.contentinfo = data.businesscard[5].PrintingInformation;
          //   console.log(this.contentinfo);
          // } else {
          //   console.log("Not enough data in businesscard array.");
          // }

        })
      } else if(url[0].path=='posters'){
        this.title='Posters';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.posters)
          this.digitizedata = data.posters;
          this.digitizedata.forEach((element: any) => {
            if(element.PrintingInformation){
              this.contentinfo=[element]
              console.log(this.contentinfo)
              this.titleService.setTitle('Posters');
              this.metaService.updateTag({ name: 'description', content: 'Posters' });
              this.metaService.updateTag({ property: 'og:title', content: 'Posters' });
            }
          });
          // if (data.businesscard.length > 5) {
          //   this.contentinfo = data.businesscard[5].PrintingInformation;
          //   console.log(this.contentinfo);
          // } else {
          //   console.log("Not enough data in businesscard array.");
          // }

        })
      }
      /* else if(url[0].path=='repositionable'){
        this.title='Repositionable Cling';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.repositionable)
          this.digitizedata = data.repositionable;
          // this.digitizedata.forEach((element: any) => {
          //   if(element.PrintingInformation){
          //     this.contentinfo=[element]
          //     console.log(this.contentinfo)
          //     this.titleService.setTitle('Repositionable Cling');
          //     this.metaService.updateTag({ name: 'description', content: 'Repositionable Cling' });
          //     this.metaService.updateTag({ property: 'og:title', content: 'Repositionable Cling' });
          //   }
          // });
          // if (data.businesscard.length > 5) {
          //   this.contentinfo = data.businesscard[5].PrintingInformation;
          //   console.log(this.contentinfo);
          // } else {
          //   console.log("Not enough data in businesscard array.");
          // }

        })
      } */
      else{
        this.title='Digitize'
      }
    })
  }

  EnquiryNow() {
    // const dialogRef = this.dialog.open(PopupComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '900px',
    });
    // dialogRef.afterOpened().subscribe(() => {
    //   // Find the dialog container element by class name or any other means if necessary
    //   const dialogContainer = document.querySelector('.mat-dialog-container');
    //   // Check if the element exists
    //   if (dialogContainer) {
    //     // Set the role attribute to 'dialog'
    //     this.renderer.setAttribute(dialogContainer, 'role', 'dialog');
    //   }
    // });
    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog closed');
    });
  }
}

