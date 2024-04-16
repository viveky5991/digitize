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

  constructor(public _router: Router, private _route: ActivatedRoute,) { }

  ngOnInit(): void {
    this._route.url.subscribe((url: any) => {
      if (url[0].path == 'business-cards') {
        console.log('business-cards');
        this.title = 'business-cards'
      } else if (url[0].path == 'voucher') {
        this.title = 'voucher'
      } else if (url[0].path == 'hang-tag') {
        this.title = 'hang-tag'
      } else if (url[0].path == 'sticker-gloss') {
        this.title = 'sticker-gloss'
      } else if (url[0].path == 'pvcwhite') {
        this.title = 'pvcwhite'
      } else if (url[0].path == 'epoxy') {
        this.title = 'epoxy'
      } else {
        this.title = 'Digitize'
      }
    })
  }

}
