import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-imgcontent7',
  standalone: true,
  imports: [],
  templateUrl: './imgcontent7.component.html',
  styleUrl: './imgcontent7.component.scss'
})
export class Imgcontent7Component implements OnInit{
  title: string | undefined;
  constructor( public _router: Router, private _route: ActivatedRoute,) { }
  ngOnInit(): void {
   
    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='MetalPlates'){
        this.title='MetalPlates'
      } else if(url[0].path=='AcrylicPlates'){
        this.title='AcrylicPlates'
      }else if(url[0].path=='WoodenPlates'){
        this.title='WoodenPlates'
      }else if(url[0].path=='TableTopPlates'){
        this.title='TableTopPlates'
      }else if(url[0].path=='TraffolytePVCAcrylic'){
        this.title='TraffolytePVCAcrylic'
      }else if(url[0].path=='MetalLabels'){
        this.title='MetalLabels'
      }else if(url[0].path=='WoodenLabels'){
        this.title='WoodenLabels'
      }else if(url[0].path=='AcrylicLabels'){
        this.title='AcrylicLabels'
      }else{
        this.title='Digitize'
      }
    })
  }
}

