import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-highlightbook',
  standalone: true,
  imports: [],
  templateUrl: './highlightbook.component.html',
  styleUrl: './highlightbook.component.scss'
})
export class HighlightbookComponent implements OnInit{
  title: string | undefined;
  constructor( public _router: Router, private _route: ActivatedRoute,) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='brochures'){
        this.title='brochures'
      }else if(url[0].path=='Tickets-Coupons'){
        this.title='Tickets-Coupons'
      }else if(url[0].path=='Window-Films'){
        this.title='Window-Films'
      }else{
        this.title='Digitize'
      }
    })
  }
}

