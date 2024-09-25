import { CommonModule, DOCUMENT } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PopupComponent } from '../../popup/popup.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SharedService } from '../../service/shared-service.service';

@Component({
  selector: 'app-highlightbook',
  standalone: true,
  imports: [HttpClientModule, CommonModule,RouterModule,],
  templateUrl: './highlightbook.component.html',
  styleUrl: './highlightbook.component.scss'
})
export class HighlightbookComponent implements OnInit{
  title: string | undefined;
  digitizedata: any;
  fullUrl: any;
  constructor( public _router: Router, @Inject(DOCUMENT) private document: Document, private _route: ActivatedRoute,private httpClient: HttpClient,public dialog: MatDialog,  private Shared:SharedService) { }
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

      if(url[0].path=='brochures'){
        this.title='Brochures';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.brochurePreparationTasks)
          this.digitizedata = data.brochurePreparationTasks;


        })
      }else if(url[0].path=='Tickets-Coupons'){
        this.title='Tickets-Coupons';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.TicketsCoupons)
          this.digitizedata = data.TicketsCoupons;


        })
      }else if(url[0].path=='Window-Films'){
        this.title='Window-Films'
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.WindowFilms)
          this.digitizedata = data.WindowFilms;


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
    dialogConfig.width = "900px";
    dialogConfig.data = {webUrl:this.fullUrl};
    const dialogRef = this.dialog.open(PopupComponent,dialogConfig);
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

