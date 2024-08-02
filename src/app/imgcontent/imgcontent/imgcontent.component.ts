import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PopupComponent } from '../../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { Animations } from '../../animation';
import { BannercontentComponent } from '../../bannercontent/bannercontent/bannercontent.component';

@Component({
  selector: 'app-imgcontent',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule, SwiperModule, BannercontentComponent],
  templateUrl: './imgcontent.component.html',
  styleUrl: './imgcontent.component.scss',
  animations: Animations
})
export class ImgcontentComponent implements OnInit {
  title: string | undefined;
  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  digitizedata: any;
  booklets: boolean = false;
  constructor(public _router: Router, private _route: ActivatedRoute, private httpClient: HttpClient, public dialog: MatDialog) { }
  ngOnInit(): void {

    this.navload()
  }
  navload() {
    this._route.url.subscribe((url: any) => {

      if (url[0].path == 'letter-heads') {
        this.title = 'Letterhead'
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.letter_heads)
          this.digitizedata = data.letter_heads;


        })
      } else if (url[0].path == 'envelopes') {
        this.title = 'Envelopes';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.envelopes)
          this.digitizedata = data.envelopes;


        })
      } else if (url[0].path == 'folders') {
        this.title = 'Folders';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Folders)
          this.digitizedata = data.Folders;


        })
      } else if (url[0].path == 'notepads') {
        this.title = 'Notepads';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Notepads)
          this.digitizedata = data.Notepads;


        })
      } else if (url[0].path == 'notebooks') {
        this.title = 'Notebook & journal';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.notebooks)
          this.digitizedata = data.notebooks;


        })
      } else if (url[0].path == 'thanks') {
        this.title = 'Thank You Cards';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.thank_card)
          this.digitizedata = data.thank_card;


        })
      } else if (url[0].path == 'calendars') {
        this.title = 'Calendars';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.calendars)
          this.digitizedata = data.calendars;


        })
      } else if (url[0].path == "booklets") {
        this.booklets = true;
        this.title = 'Booklets & Catalogues';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.booklets)
          this.digitizedata = data.booklets;


        })
      }
      else {
        this.title = 'Digitize'
      }
    })
  }
  EnquiryNow() {
    // const dialogRef = this.dialog.open(PopupComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '700px',
      height: '620px'
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
