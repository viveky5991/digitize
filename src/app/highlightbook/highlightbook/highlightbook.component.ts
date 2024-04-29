import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-highlightbook',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './highlightbook.component.html',
  styleUrl: './highlightbook.component.scss'
})
export class HighlightbookComponent implements OnInit{
  title: string | undefined;
  digitizedata: any;
  constructor( public _router: Router, private _route: ActivatedRoute,private httpClient: HttpClient) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='brochures'){
        this.title='Brochures';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.brochurePreparationTasks)
          this.digitizedata = data.brochurePreparationTasks;
          // if (data.businesscard.length > 5) {
          //   this.contentinfo = data.businesscard[5].PrintingInformation;
          //   console.log(this.contentinfo);
          // } else {
          //   console.log("Not enough data in businesscard array.");
          // }

        })
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

