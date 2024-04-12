import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-imgcontent8',
  standalone: true,
  imports: [],
  templateUrl: './imgcontent8.component.html',
  styleUrl: './imgcontent8.component.scss'
})
export class Imgcontent8Component implements OnInit{
  title: string | undefined;
  constructor( public _router: Router, private _route: ActivatedRoute,) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='SailFlags'){
        this.title='SailFlags'
      } else if(url[0].path=='TearDropFlags'){
        this.title='TearDropFlags'
      }else if(url[0].path=='LShapeFlags'){
        this.title='LShapeFlags'
      }else if(url[0].path=='BladeFlags'){
        this.title='BladeFlags'
      }else if(url[0].path=='TelescopicFlags'){
        this.title='TelescopicFlags'
      }else if(url[0].path=='CarFlags'){
        this.title='CarFlags'
      }else if(url[0].path=='CarDesert'){
        this.title='CarDesert'
      }else if(url[0].path=='Dashboard'){
        this.title='Dashboard'
      }else{
        this.title='Digitize'
      }
    })
  }
}
