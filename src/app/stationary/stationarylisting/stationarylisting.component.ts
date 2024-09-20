import { Component, Inject, OnInit } from '@angular/core';
import { StationaryModule } from '../stationary.module';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../service/shared-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, DOCUMENT, Location } from '@angular/common';
import { PopupComponent } from '../../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-stationarylisting',
  standalone: true,
  imports: [HttpClientModule, CommonModule
  ],
  templateUrl: './stationarylisting.component.html',
  styleUrl: './stationarylisting.component.scss'
})
export class StationarylistingComponent implements OnInit {
  title: string | undefined;
  data: any[] | undefined;

  digitizedata: any;
  contentinfo: any;
  fullUrl: any;
  busines: any;
  constructor(public _router: Router, private _route: ActivatedRoute, private service: SharedService, private httpClient: HttpClient,public dialog: MatDialog,private metaService: Meta, private titleService: Title, private location: Location, @Inject(DOCUMENT) private document: Document,private shared: SharedService) { }

  ngOnInit(): void {
    
    this.fullUrl = this.getFullUrl();
    console.log(this.fullUrl)
    this._route.url.subscribe((url: any) => {
      // const urlweb = window.location.href;
      // console.log(urlweb)
      if (url[0].path == 'business-cards') {
        // this.data = this.service.getData();
        // console.log(this.data)
        console.log('business-cards');
        this.title = 'Business Cards'
      this.busines=true
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log('iiiiiiii',data.businesscard)
          this.digitizedata = data.businesscard;
          this.digitizedata.forEach((element: any) => {
            if(element.PrintingInformation){
              this.contentinfo=[element]
              console.log(this.contentinfo)
              this.titleService.setTitle('Business-card');
              this.metaService.updateTag({ name: 'description', content: 'businesscard' });
              this.metaService.updateTag({ property: 'og:title', content: 'businesscard' });
            }
          });
          // if (data.businesscard.length > 5) {
          //   this.contentinfo = data.businesscard[5].PrintingInformation;
          //   console.log(this.contentinfo);
          // } else {
          //   console.log("Not enough data in businesscard array.");
          // }

        }


        )
      } else if (url[0].path == 'voucher') {
        this.title = 'Voucher'
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.voucher)
          this.digitizedata = data.voucher;
          this.digitizedata.forEach((element: any) => {
            if(element.PrintingInformation){
              this.contentinfo=[element]
              console.log(this.contentinfo)
            }
          });
        })
      } else if (url[0].path == 'hang-tag') {
        this.title = 'Hang Tag'
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.hangtag)
          this.digitizedata = data.hangtag;
          this.digitizedata.forEach((element: any) => {
            if(element.PrintingInformation){
              this.contentinfo=[element]
              console.log(this.contentinfo)
            }
          });
        })
      } else if (url[0].path == 'sticker-gloss') {
        this.title = 'Sticker Gloss'
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.sticker_gloss)
          this.digitizedata = data.sticker_gloss;
          this.digitizedata.forEach((element: any) => {
            if(element.PrintingInformation){
              this.contentinfo=[element]
              console.log(this.contentinfo)
            }
          });
        })
      }  else if (url[0].path == 'Stickers') {
        this.title = 'Stickers'
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Stickers)
          this.digitizedata = data.Stickers;
          this.digitizedata.forEach((element: any) => {
            if(element.PrintingInformation){
              this.contentinfo=[element]
              console.log(this.contentinfo)
            }
          });
        })
      }else if (url[0].path == 'pvcwhite') {
        this.title = 'PVC Stickers'
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.pvcwhite)
          this.digitizedata = data.pvcwhite;
          this.digitizedata.forEach((element: any) => {
            if(element.PrintingInformation){
              this.contentinfo=[element]
              console.log(this.contentinfo)
            }
          });
        })
      } else if (url[0].path == 'epoxy') {
        this.title = 'Epoxy Stickers'
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.epoxy)
          this.digitizedata = data.epoxy;
          this.digitizedata.forEach((element: any) => {
            if(element.PrintingInformation){
              this.contentinfo=[element]
              console.log(this.contentinfo)
            }
          });
        })
      } else {
        this.title = 'Digitize'
      }
    })
  }
  navigate(path:string){
    this._router.navigateByUrl(path);
  }
   getFullUrl() {
    
     return this.document.location.href;
  }

  EnquiryNow() {
       // const dialogRef = this.dialog.open(PopupComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    const dataToPass = { webUrl: this.fullUrl };
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '900px',
      data:dataToPass
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
