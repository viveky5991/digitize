import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-print',
  standalone: true,
  imports: [],
  templateUrl: './print.component.html',
  styleUrl: './print.component.scss'
})
export class PrintComponent  implements OnInit{
  title: string | undefined;
  constructor( public _router: Router, private _route: ActivatedRoute,) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='envelopes'){
console.log('envelopes');
this.title='Envelopes'
      } else if(url[0].path=='business-cards'){
        this.title='Business-Cards'
      }else{
        this.title='Digitize'
      }
    })
  }
}
