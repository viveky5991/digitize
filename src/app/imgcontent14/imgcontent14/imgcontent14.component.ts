import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-imgcontent14',
  standalone: true,
  imports: [],
  templateUrl: './imgcontent14.component.html',
  styleUrl: './imgcontent14.component.scss'
})
export class Imgcontent14Component implements OnInit{
  title: string | undefined;
  constructor( public _router: Router, private _route: ActivatedRoute,) { }
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

