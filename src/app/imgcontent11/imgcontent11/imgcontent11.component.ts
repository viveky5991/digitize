import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imgcontent11',
  standalone: true,
  imports: [HttpClientModule, CommonModule,RouterModule],
  templateUrl: './imgcontent11.component.html',
  styleUrl: './imgcontent11.component.scss'
})
export class Imgcontent11Component implements OnInit{
  title: string | undefined;
  digitizedata: any;
  constructor(public _router: Router, private _route: ActivatedRoute,private httpClient: HttpClient) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='Pens'){
        this.title='Pens';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.letter_heads)
          this.digitizedata = data.letter_heads;


        })
      } else if(url[0].path=='PUNotebooks'){
        this.title='PUNotebooks'
      }else if(url[0].path=='PUOrganizer'){
        this.title='PUOrganizer'
      }else if(url[0].path=='MousePad'){
        this.title='MousePad'
      }else if(url[0].path=='TShirt'){
        this.title='TShirt'
      }else if(url[0].path=='Jersey'){
        this.title='Jersey'
      }else if(url[0].path=='Caps'){
        this.title='Caps'
      }else if(url[0].path=='NeckTie'){
        this.title='NeckTie'
      }else if(url[0].path=='SafetyVest'){
        this.title='SafetyVest'
      }else{
        this.title='Digitize'
      }
    })
  }
}

