import { CommonModule, DOCUMENT } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

import { PopupComponent } from '../../popup/popup.component';

@Component({
  selector: 'app-imgcontent2',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule,],
  templateUrl: './imgcontent2.component.html',
  styleUrl: './imgcontent2.component.scss'
})
export class Imgcontent2Component implements OnInit {
  title: string | undefined;
  digitizedata: any;
  fullUrl: any;
  constructor(public _router: Router, private _route: ActivatedRoute, private httpClient: HttpClient,public dialog: MatDialog, private location: Location, @Inject(DOCUMENT) private document: Document) { }
  ngOnInit(): void {

    this.navload()
  }

  getFullUrl() {
    const protocol = this.document.location.protocol;
    const host = this.document.location.host;
    const path = this.location.prepareExternalUrl(this.location.path());
    return `${protocol}//${host}${path}`;
  }

  navload() {
    this.fullUrl = this.getFullUrl();
    console.log(this.fullUrl)
    this._route.url.subscribe((url: any) => {
            if (url[0].path == 'die-cut') {
        console.log('die-cut');

        this.title = 'Die-Cut';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.die_cut)
          this.digitizedata = data.die_cut;
        })
      } else if (url[0].path == 'print-cut') {
        this.title = 'Print And Cut Stickers';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.print_cut)
          this.digitizedata = data.print_cut;
        })
      } else if (url[0].path == 'transparent') {
        this.title = 'Transparent Stickers'
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.transparent)
          this.digitizedata = data.transparent;
        })
      } else if (url[0].path == 'whiteink') {
        this.title = 'White-Ink'
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.white_ink)
          this.digitizedata = data.white_ink;
        })
      } else if (url[0].path == 'embossingseal') {
        this.title = 'Embossing Seal'
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.embossing_seal)
          this.digitizedata = data.embossing_seal;
        })
      } else if (url[0].path == 'kraftpaper') {
        this.title = 'Kraft Paper Sticker'
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.kraft_paper)
          this.digitizedata = data.kraft_paper;
        })
      } else {
        this.title = 'Digitize'
      }
    })
  }
  EnquiryNow() {
    debugger
    // const dialogRef = this.dialog.open(PopupComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = "550px";
    dialogConfig.data = this.fullUrl;
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

