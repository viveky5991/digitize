import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-imgcontent1',
  standalone: true,
  imports: [HttpClientModule, CommonModule,RouterModule,],
  templateUrl: './imgcontent1.component.html',
  styleUrl: './imgcontent1.component.scss'
})
export class Imgcontent1Component implements OnInit{
  title: string | undefined;
  digitizedata: any;
  constructor( public _router: Router, private _route: ActivatedRoute,private httpClient: HttpClient) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='selfink-stamps'){
        this.title='Self Ink';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.selfink_stamps)
          this.digitizedata = data.selfink_stamps;


        })
      } else if(url[0].path=='wax-seal'){
        this.title='Wax-Seal';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Wax_Seal)
          this.digitizedata = data.Wax_Seal;


        })
      }else if(url[0].path=='embossing-seal'){
        this.title='Embossing-Seal';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Embossing_Seal)
          this.digitizedata = data.Embossing_Seal;


        })
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
