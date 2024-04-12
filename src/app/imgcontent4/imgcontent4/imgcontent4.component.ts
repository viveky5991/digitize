import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-imgcontent4',
  standalone: true,
  imports: [],
  templateUrl: './imgcontent4.component.html',
  styleUrl: './imgcontent4.component.scss'
})
export class Imgcontent4Component  implements OnInit{
  title: string | undefined;
  constructor( public _router: Router, private _route: ActivatedRoute,) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='Unlit3D'){
        this.title='Unlit3D'
      } else if(url[0].path=='Frontlit3D'){
        this.title='Frontlit3D'
      }else if(url[0].path=='Backlit3D'){
        this.title='Backlit3D'
      }else if(url[0].path=='Outlit3D'){
        this.title='Outlit3D'
      }else if(url[0].path=='PushThrough3D'){
        this.title='PushThrough3D'
      }else if(url[0].path=='Neon3D'){
        this.title='Neon3D'
      }else if(url[0].path=='Tent-Cards'){
        this.title='Tent-Cards'
      }else{
        this.title='Digitize'
      }
    })
  }
}

