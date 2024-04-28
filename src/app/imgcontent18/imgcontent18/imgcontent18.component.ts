import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-imgcontent18',
  standalone: true,
  imports: [],
  templateUrl: './imgcontent18.component.html',
  styleUrl: './imgcontent18.component.scss'
})
export class Imgcontent18Component implements OnInit{
  title: string | undefined;
  constructor( public _router: Router, private _route: ActivatedRoute,) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='promotion'){
        this.title='promotion'
      } else if(url[0].path=='exhibition-counter'){
        this.title='exhibition-counter'
      } else if(url[0].path=='tent-canopy'){
        this.title='tent-canopy'
      } else if(url[0].path=='parasol-umbrella'){
        this.title='parasol-umbrella'
      } else if(url[0].path=='cover-cloth'){
        this.title='cover-cloth'
      } else if(url[0].path=='media-frame'){
        this.title='media-frame'
      } else if(url[0].path=='foam-board'){
        this.title='foam-board'
      } else if(url[0].path=='shell-scheme'){
        this.title='shell-scheme'
      } else if(url[0].path=='flag-base'){
        this.title='flag-base'
      }else{
        this.title='Digitize'
      }
    })
  }
}


