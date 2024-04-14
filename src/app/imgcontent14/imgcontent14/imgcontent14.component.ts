import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-imgcontent14',
  standalone: true,
  imports: [],
  templateUrl: './imgcontent14.component.html',
  styleUrl: './imgcontent14.component.scss'
})
export class Imgcontent14Component implements OnInit{
  title: string | undefined;
  constructor( public _router: Router, private _route: ActivatedRoute,) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='ReverseCut-Frosted'){
        this.title='ReverseCut-Frosted'
      }else if(url[0].path=='vehicle-graphics'){
        this.title='vehicle-graphics'
      } else{
        this.title='Digitize'
      }
    })
  }
}

