import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-imgcontent9',
  standalone: true,
  imports: [],
  templateUrl: './imgcontent9.component.html',
  styleUrl: './imgcontent9.component.scss'
})
export class Imgcontent9Component implements OnInit{
  title: string | undefined;
  constructor( public _router: Router, private _route: ActivatedRoute,) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='Pennant'){
        this.title='Pennant'
      } else if(url[0].path=='Bunting'){
        this.title='Bunting'
      }else if(url[0].path=='Toothpick'){
        this.title='Toothpick'
      }else if(url[0].path=='Poleflags'){
        this.title='Poleflags'
      }else if(url[0].path=='Handflags'){
        this.title='Handflags'
      }else if(url[0].path=='FinishLine'){
        this.title='FinishLine'
      }else if(url[0].path=='BodyFlags'){
        this.title='BodyFlags'
      }else if(url[0].path=='FanScarf'){
        this.title='FanScarf'
      }else{
        this.title='Digitize'
      }
    })
  }
}

