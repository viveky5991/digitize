import { Component, OnInit } from '@angular/core';
import { StationaryModule } from '../stationary.module';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../service/shared-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-stationarylisting',
  standalone: true,
  imports: [HttpClientModule, CommonModule
  ],
  templateUrl: './stationarylisting.component.html',
  styleUrl: './stationarylisting.component.scss'
})
export class StationarylistingComponent implements OnInit {
  title: string | undefined;
  data: any[] | undefined;

  digitizedata: any;
  constructor(public _router: Router, private _route: ActivatedRoute, private service: SharedService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    debugger
    this._route.url.subscribe((url: any) => {
      debugger
      if (url[0].path == 'business-cards') {
        // this.data = this.service.getData();
        // console.log(this.data)
        console.log('business-cards');
        this.title = 'business-cards'
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.businesscard)
          this.digitizedata = data.businesscard

        }


        )
      } else if (url[0].path == 'voucher') {
        this.title = 'voucher'
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.voucher)
          this.digitizedata = data.voucher
        })
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
