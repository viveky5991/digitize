import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent implements OnInit{
  title: string | undefined;
  constructor( public _router: Router, private _route: ActivatedRoute,) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='wind-shield'){
        this.title='wind-shield'
      } else if(url[0].path=='helmet'){
        this.title='helmet'
      } else if(url[0].path=='floor-stickers'){
        this.title='floor-stickers'
      } else if(url[0].path=='posters'){
        this.title='posters'
      } else if(url[0].path=='repositionable'){
        this.title='repositionable'
      }else{
        this.title='Digitize'
      }
    })
  }
}

