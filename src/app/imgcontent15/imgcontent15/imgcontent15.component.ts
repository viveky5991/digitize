import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PopupComponent } from '../../popup/popup.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imgcontent15',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule],
  templateUrl: './imgcontent15.component.html',
  styleUrl: './imgcontent15.component.scss'
})
export class Imgcontent15Component implements OnInit{
  title: string | undefined;
  digitizedata: any;
  constructor( public _router: Router, private _route: ActivatedRoute,  private httpClient: HttpClient,public dialog: MatDialog) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='magnetic'){
        this.title='Magnetic';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.magnetic)
          this.digitizedata = data.magnetic;
        })

      } else if(url[0].path=='ceremonial'){
        this.title='Ceremonial Ribbon';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.ceremonial)
          this.digitizedata = data.ceremonial;
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

