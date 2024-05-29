import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Animations } from '../../animation';

@Component({
  selector: 'app-imgcontent5',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule,],
  templateUrl: './imgcontent5.component.html',
  styleUrl: './imgcontent5.component.scss',
  animations: Animations
})
export class Imgcontent5Component implements OnInit{
  title: string | undefined;
  constructor( public _router: Router, private _route: ActivatedRoute,) { }
  ngOnInit(): void {

    this.navload()
  }
  navload(){
    this._route.url.subscribe((url: any) => {
      debugger
      if(url[0].path=='FlexFace'){
      this.title='FlexFace'
      } else if(url[0].path=='Frontlit3D'){
        this.title='Frontlit3D'
      }else if(url[0].path=='Backtlit3D'){
        this.title='Backtlit3D'
      }else if(url[0].path=='PushThrough'){
        this.title='PushThrough'
      }else if(url[0].path=='Neon'){
        this.title='Neon'
      }else if(url[0].path=='FlexFace-LightBox'){
        this.title='FlexFace-LightBox'
      }else if(url[0].path=='Fabric'){
        this.title='Fabric'
      }else if(url[0].path=='Acrylic'){
        this.title='Acrylic'
      }else if(url[0].path=='Poster'){
        this.title='Poster'
      }else{
        this.title='Digitize'
      }
    })
  }
}
