import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-imgcontent3',
  standalone: true,
  imports: [],
  templateUrl: './imgcontent3.component.html',
  styleUrl: './imgcontent3.component.scss'
})
export class Imgcontent3Component  implements OnInit{
  title: string | undefined;
  constructor( public _router: Router, private _route: ActivatedRoute,) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='Window-Vinyl'){
        this.title='Window-Vinyl'
      } else if(url[0].path=='Window-Graphics'){
        this.title='Window-Graphics'
      }else if(url[0].path=='OneWay-Vision'){
        this.title='OneWay-Vision'
      }else if(url[0].path=='Wall-Vinyl'){
        this.title='Wall-Vinyl'
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

