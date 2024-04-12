import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-imgcontent2',
  standalone: true,
  imports: [],
  templateUrl: './imgcontent2.component.html',
  styleUrl: './imgcontent2.component.scss'
})
export class Imgcontent2Component  implements OnInit{
  title: string | undefined;
  constructor( public _router: Router, private _route: ActivatedRoute,) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='die-cut'){
console.log('selfink-stamps');
this.title='die-cut'
      } else if(url[0].path=='print-cut'){
        this.title='print-cut'
      }else if(url[0].path=='transparent'){
        this.title='transparent'
      }else if(url[0].path=='whiteink'){
        this.title='whiteink'
      }else if(url[0].path=='embossingseal'){
        this.title='embossingseal'
      }else if(url[0].path=='kraftpaper'){
        this.title='kraftpaper'
      }else{
        this.title='Digitize'
      }
    })
  }
}

