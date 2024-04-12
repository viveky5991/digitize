import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-imgcontent1',
  standalone: true,
  imports: [],
  templateUrl: './imgcontent1.component.html',
  styleUrl: './imgcontent1.component.scss'
})
export class Imgcontent1Component implements OnInit{
  title: string | undefined;
  constructor( public _router: Router, private _route: ActivatedRoute,) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='selfink-stamps'){
console.log('selfink-stamps');
this.title='selfink-stamps'
      } else if(url[0].path=='wax-seal'){
        this.title='wax-seal'
      }else if(url[0].path=='embossing-seal'){
        this.title='embossing-seal'
      }else if(url[0].path=='flyers'){
        this.title='flyers'
      }else if(url[0].path=='compliment-slips'){
        this.title='compliment-slips'
      }else if(url[0].path=='Coupons'){
        this.title='Coupons'
      }else if(url[0].path=='Tent-Cards'){
        this.title='Tent-Cards'
      }else{
        this.title='Digitize'
      }
    })
  }
}
