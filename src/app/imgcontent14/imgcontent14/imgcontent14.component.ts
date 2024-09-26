import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PopupComponent } from '../../popup/popup.component';
import { Location } from '@angular/common';
import { CommonModule,DOCUMENT } from '@angular/common';
import { Component, OnInit,Inject } from '@angular/core';
import { Animations } from '../../animation';
import { SharedService } from '../../service/shared-service.service';
@Component({
  selector: 'app-imgcontent14',
  standalone: true,
  imports: [HttpClientModule, CommonModule,RouterModule,],
  templateUrl: './imgcontent14.component.html',
  styleUrl: './imgcontent14.component.scss',
  animations: Animations
})
export class Imgcontent14Component implements OnInit{
  title: string | undefined;
  digitizedata: any;
  fullUrl: any;
  constructor( public _router: Router, private _route: ActivatedRoute,  private httpClient: HttpClient,public dialog: MatDialog, private location: Location, @Inject(DOCUMENT) private document: Document,  private Shared:SharedService) { }
  ngOnInit(): void {

    this.navload()
  }
  getFullUrl() {
    return this.document.location.href;
  }
  navload(){
    this.fullUrl = this.getFullUrl();
    console.log(this.fullUrl)
    this._route.url.subscribe((url: any) => {

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

      }else if(url[0].path=='Magnetic-Sheet'){
        this.title='Magnetic Sheet';
        this.httpClient.get<any>("assets/data.json").subscribe((data) => {

          console.log(data.magneticsheet)
          this.digitizedata = data.magneticsheet;


        })
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
  EnquiryNow() {
    debugger
    // const dialogRef = this.dialog.open(PopupComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = "550px";
    dialogConfig.data = {webUrl:this.fullUrl};
    const dialogRef = this.dialog.open(PopupComponent, dialogConfig);
    // dialogRef.afterOpened().subscribe(() => {
    //   // Find the dialog container element by class name or any other means if necessary
    //   const dialogContainer = document.querySelector('.mat-dialog-container');
    //   // Check if the element exists
    //   if (dialogContainer) {
    //     // Set the role attribute to 'dialog'
    //     this.renderer.setAttribute(dialogContainer, 'role', 'dialog');
    //   }
    // });
    dialogRef.afterClosed().subscribe({
      next: (result) => {
        console.log(`Dialog result: ${result}`);
      },
      error: (error) => {
        console.error('Error occurred while opening the dialog:', error);
      }
    });
  }
}

