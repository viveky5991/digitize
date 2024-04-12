import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-imgcontent12',
  standalone: true,
  imports: [],
  templateUrl: './imgcontent12.component.html',
  styleUrl: './imgcontent12.component.scss'
})
export class Imgcontent12Component implements OnInit{
  title: string | undefined;
  constructor( public _router: Router, private _route: ActivatedRoute,) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='Wristband'){
        this.title='Wristband'
      } else if(url[0].path=='NameBadges'){
        this.title='NameBadges'
      }else if(url[0].path=='Lanyards'){
        this.title='Lanyards'
      }else if(url[0].path=='IDCardsBadgeReel'){
        this.title='IDCardsBadgeReel'
      }else if(url[0].path=='Keychain'){
        this.title='Keychain'
      }else if(url[0].path=='Mugs'){
        this.title='Mugs'
      }else if(url[0].path=='Bottles'){
        this.title='Bottles'
      }else if(url[0].path=='Tumblers'){
        this.title='Tumblers'
      }else{
        this.title='Digitize'
      }
    })
  }
}

