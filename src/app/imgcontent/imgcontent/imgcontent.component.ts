import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-imgcontent',
  standalone: true,
  imports: [HttpClientModule, CommonModule,RouterModule,],
  templateUrl: './imgcontent.component.html',
  styleUrl: './imgcontent.component.scss'
})
export class ImgcontentComponent implements OnInit {
  title: string | undefined;
  digitizedata: any;
  constructor(public _router: Router, private _route: ActivatedRoute,private httpClient: HttpClient) { }
  ngOnInit(): void {

    this.navload()
  }
  navload() {
    this._route.url.subscribe((url: any) => {
      debugger
      if (url[0].path == 'letter-heads') {
        console.log('envletter-headselopes');
        this.title = 'letter-heads'
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
      } else {
        this.title = 'Digitize'
      }
    })
  }
}
