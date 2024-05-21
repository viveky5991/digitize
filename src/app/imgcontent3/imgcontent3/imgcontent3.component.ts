import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-imgcontent3',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule,],
  templateUrl: './imgcontent3.component.html',
  styleUrl: './imgcontent3.component.scss'
})
export class Imgcontent3Component  implements OnInit{
  title: string | undefined;
  digitizedata: any;
  constructor( public _router: Router, private _route: ActivatedRoute,  private httpClient: HttpClient) { }
  ngOnInit(): void {

    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='Window-Vinyl'){
        this.title='Window Vinyl Lettering';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.window_vinyl)
          this.digitizedata = data.window_vinyl;
        })
      } else if(url[0].path=='Window-Graphics'){
        this.title='Window-Graphics';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Window_Graphics)
          this.digitizedata = data.Window_Graphics;
        })
      }else if(url[0].path=='OneWay-Vision'){
        this.title='One Way Vision Sticker';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.OneWay_Vision)
          this.digitizedata = data.OneWay_Vision;
        })
      }else if(url[0].path=='Wall-Vinyl'){
        this.title='Wall Vinyl Lettering';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.OneWay_Vision)
          this.digitizedata = data.OneWay_Vision;
        })
      }else if(url[0].path=='Wall-Graphics'){
        this.title='Wall-Graphics'
      }else if(url[0].path=='Canvas'){
        this.title='Canvas'
      }else if(url[0].path=='Wooden'){
        this.title='Wooden'
      }else if(url[0].path=='Acrylic'){
        this.title='Acrylic'
      }else if(url[0].path=='MetalArt'){
        this.title='MetalArt'
      }else{
        this.title='Digitize'
      }
    })
  }
}

