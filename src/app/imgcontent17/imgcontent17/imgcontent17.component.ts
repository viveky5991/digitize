import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-imgcontent17',
  standalone: true,
  imports: [],
  templateUrl: './imgcontent17.component.html',
  styleUrl: './imgcontent17.component.scss'
})
export class Imgcontent17Component  implements OnInit{
  title: string | undefined;
  constructor( public _router: Router, private _route: ActivatedRoute,) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='wooden-backdrop'){
        this.title='wooden-backdrop'
      } else if(url[0].path=='repeat-backdrop'){
        this.title='repeat-backdrop'
      } else if(url[0].path=='backdrop-indoor'){
        this.title='backdrop-indoor'
      } else if(url[0].path=='backdrop-outdoor'){
        this.title='backdrop-outdoor'
      } else if(url[0].path=='popout-banner'){
        this.title='popout-banner'
      } else if(url[0].path=='toblerone-frame'){
        this.title='toblerone-frame'
      } else if(url[0].path=='cutout-standee'){
        this.title='cutout-standee'
      }else{
        this.title='Digitize'
      }
    })
  }
}

