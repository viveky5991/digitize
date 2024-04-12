import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-imgcontent6',
  standalone: true,
  imports: [],
  templateUrl: './imgcontent6.component.html',
  styleUrl: './imgcontent6.component.scss'
})
export class Imgcontent6Component implements OnInit{
  title: string | undefined;
  constructor( public _router: Router, private _route: ActivatedRoute,) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='SelfStanding'){
        this.title='SelfStanding'
      } else if(url[0].path=='WallMounted'){
        this.title='WallMounted'
      }else if(url[0].path=='Hanging'){
        this.title='Hanging'
      }else if(url[0].path=='Directory'){
        this.title='Directory'
      }else if(url[0].path=='Metal'){
        this.title='Metal'
      }else if(url[0].path=='Wooden'){
        this.title='Wooden'
      }else if(url[0].path=='AcrylicLetters'){
        this.title='AcrylicLetters'
      }else if(url[0].path=='ForexFoam'){
        this.title='ForexFoam'
      }else{
        this.title='Digitize'
      }
    })
  }
}
