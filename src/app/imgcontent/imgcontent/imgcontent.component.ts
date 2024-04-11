import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-imgcontent',
  standalone: true,
  imports: [],
  templateUrl: './imgcontent.component.html',
  styleUrl: './imgcontent.component.scss'
})
export class ImgcontentComponent implements OnInit{
  title: string | undefined;
  constructor( public _router: Router, private _route: ActivatedRoute,) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='letter-heads'){
console.log('envletter-headselopes');
this.title='letter-heads'
      } else if(url[0].path=='envelopes'){
        this.title='envelopes'
      }else if(url[0].path=='folders'){
        this.title='folders'
      }else if(url[0].path=='notepads'){
        this.title='notepads'
      }else if(url[0].path=='notebooks'){
        this.title='notebook&journal'
      }else if(url[0].path=='thanks'){
        this.title='thankyoucard'
      }else if(url[0].path=='calendars'){
        this.title='calendars'
      }else{
        this.title='Digitize'
      }
    })
  }
}
