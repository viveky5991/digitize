import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-imgcontent16',
  standalone: true,
  imports: [],
  templateUrl: './imgcontent16.component.html',
  styleUrl: './imgcontent16.component.scss'
})
export class Imgcontent16Component  implements OnInit{
  title: string | undefined;
  constructor( public _router: Router, private _route: ActivatedRoute,) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='popups'){
        this.title='popups'
      } else if(url[0].path=='fabric-popups'){
        this.title='fabric-popups'
      }else if(url[0].path=='rollup-banners'){
        this.title='rollup-banners'
      }else if(url[0].path=='x-banners'){
        this.title='x-banners'
      }else if(url[0].path=='banners-flex'){
        this.title='banners-flex'
      }else if(url[0].path=='fence-banners'){
        this.title='fence-banners'
      }else if(url[0].path=='lama-stand'){
        this.title='lama-stand'
      }else{
        this.title='Digitize'
      }
    })
  }
}

