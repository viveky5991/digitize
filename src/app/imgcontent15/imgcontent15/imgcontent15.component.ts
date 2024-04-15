import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-imgcontent15',
  standalone: true,
  imports: [],
  templateUrl: './imgcontent15.component.html',
  styleUrl: './imgcontent15.component.scss'
})
export class Imgcontent15Component implements OnInit{
  title: string | undefined;
  constructor( public _router: Router, private _route: ActivatedRoute,) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='magnetic'){
        this.title='magnetic'
      } else if(url[0].path=='ceremonial'){
        this.title='ceremonial'
      }else{
        this.title='Digitize'
      }
    })
  }
}

