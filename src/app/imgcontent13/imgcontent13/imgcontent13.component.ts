import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-imgcontent13',
  standalone: true,
  imports: [],
  templateUrl: './imgcontent13.component.html',
  styleUrl: './imgcontent13.component.scss'
})
export class Imgcontent13Component implements OnInit{
  title: string | undefined;
  constructor( public _router: Router, private _route: ActivatedRoute,) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='Paperbag'){
        this.title='Paperbag'
      } else if(url[0].path=='Kraftbag'){
        this.title='Kraftbag'
      }else if(url[0].path=='NonWovenbag'){
        this.title='NonWovenbag'
      }else if(url[0].path=='Jutebag'){
        this.title='Jutebag'
      }else if(url[0].path=='Totebag'){
        this.title='Totebag'
      }else if(url[0].path=='Canvasbag'){
        this.title='Canvasbag'
      }else if(url[0].path=='Drawstringbag'){
        this.title='Drawstringbag'
      }else if(url[0].path=='CottonStringbag'){
        this.title='CottonStringbag'
      }else{
        this.title='Digitize'
      }
    })
  }
}

