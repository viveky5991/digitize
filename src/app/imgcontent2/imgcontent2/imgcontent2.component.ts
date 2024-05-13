import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

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
  constructor(public _router: Router, private _route: ActivatedRoute, private httpClient: HttpClient) { }
  ngOnInit(): void {

    this.navload()
  }
  navload() {
    this._route.url.subscribe((url: any) => {
      debugger
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
        this.title = 'embossingseal'
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.die_cut)
          this.digitizedata = data.die_cut;
        })
      } else if (url[0].path == 'kraftpaper') {
        this.title = 'kraftpaper'
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.die_cut)
          this.digitizedata = data.die_cut;
        })
      } else {
        this.title = 'Digitize'
      }
    })
  }
}

