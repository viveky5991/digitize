import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PopupComponent } from '../../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';

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
  constructor( public _router: Router, private _route: ActivatedRoute,private httpClient: HttpClient,public dialog: MatDialog) { }
  ngOnInit(): void {

    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
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

