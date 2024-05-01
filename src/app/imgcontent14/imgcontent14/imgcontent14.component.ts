import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-imgcontent14',
  standalone: true,
  imports: [HttpClientModule, CommonModule,RouterModule,],
  templateUrl: './imgcontent14.component.html',
  styleUrl: './imgcontent14.component.scss'
})
export class Imgcontent14Component implements OnInit{
  title: string | undefined;
  digitizedata: any;
  constructor( public _router: Router, private _route: ActivatedRoute,private httpClient: HttpClient) { }
  ngOnInit(): void {

    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      this._route.fragment.subscribe(fragment => {
        if (fragment) {
          this.scrollToFragment(fragment);
        }
      });
      if(url[0].path=='Frosted-Sticker'){

        this.title='Frosted-Sticker'
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.Frosted_Sticker)
          this.digitizedata = data.Frosted_Sticker;


        })

      }else if(url[0].path=='vehicle-graphics'){
        this.title='vehicle-graphics'
      } else{
        this.title='Digitize'
      }
    })
  }
  scrollToFragment(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

