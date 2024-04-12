import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-imgcontent10',
  standalone: true,
  imports: [],
  templateUrl: './imgcontent10.component.html',
  styleUrl: './imgcontent10.component.scss'
})
export class Imgcontent10Component implements OnInit{
  title: string | undefined;
  constructor( public _router: Router, private _route: ActivatedRoute,) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='Hoisting'){
        this.title='Hoisting'
      } else if(url[0].path=='WallMounted'){
        this.title='WallMounted'
      }else if(url[0].path=='Stadium'){
        this.title='Stadium'
      }else if(url[0].path=='Advertising'){
        this.title='Advertising'
      }else if(url[0].path=='Festival'){
        this.title='Festival'
      }else if(url[0].path=='TableFlags'){
        this.title='TableFlags'
      }else if(url[0].path=='TableFlagsRoyal'){
        this.title='TableFlagsRoyal'
      }else if(url[0].path=='ConferenceFlags'){
        this.title='ConferenceFlags'
      }else if(url[0].path=='ConferenceFlagsHanging'){
        this.title='ConferenceFlagsHanging'
      }else{
        this.title='Digitize'
      }
    })
  }
}

