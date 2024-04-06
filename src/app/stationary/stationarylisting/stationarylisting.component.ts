import { Component, OnInit } from '@angular/core';
import { StationaryModule } from '../stationary.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stationarylisting',
  standalone: true,
  imports: [],
  templateUrl: './stationarylisting.component.html',
  styleUrl: './stationarylisting.component.scss'
})
export class StationarylistingComponent implements OnInit {
  title: string | undefined;

  constructor( public _router: Router, private _route: ActivatedRoute,) { }

  ngOnInit(): void {
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
