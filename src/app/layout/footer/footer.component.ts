import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopupComponent } from '../../popup/popup.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterComponent, CommonModule,RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  windowScrolled = false;
  topPosToStartShowing = 100;
  currentdate : Date = new Date();
  fullUrl: any;
  constructor(public dialog: MatDialog, private router: Router, @Inject(PLATFORM_ID) private platformId: any, private el: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    // this.openDialog()
    // if (isPlatformBrowser(this.platformId)) {
    //   setTimeout(() => {
    //     var element = this.el.nativeElement.querySelector('.btn-enquiry');
    //     var enqModal = document.querySelector('#mat-dialog-0');
    //     console.log(enqModal);
    //     // var customData = element.getAttribute('target-data');
    //     if (element.className && !enqModal) {
    //       this.openDialog(); // Call the openDialog function after the delay
    //     } else {
    //       ''
    //     }

    //   }, 9000000);

    //   window.addEventListener('scroll', () => {
    //     this.windowScrolled = window.pageYOffset !== 0;
    //   });

    //   this.scrollToTop();
    // }
  }

  // openDialog() {
  //   // const dialogRef = this.dialog.open(PopupComponent);

  //   // dialogRef.afterClosed().subscribe(result => {
  //   //   console.log(`Dialog result: ${result}`);
  //   // });
  //   const dialogRef = this.dialog.open(PopupComponent, {
  //    width: '700px',
  //     height:'620px'
  //   });
  //   dialogRef.afterOpened().subscribe(() => {
  //     // Find the dialog container element by class name or any other means if necessary
  //     const dialogContainer = document.querySelector('.mat-dialog-container');
  //     // Check if the element exists
  //     if (dialogContainer) {
  //       // Set the role attribute to 'dialog'
  //       this.renderer.setAttribute(dialogContainer, 'role', 'dialog');
  //     }
  //   });
  //   dialogRef.afterClosed().subscribe(() => {
  //     console.log('Dialog closed');
  //   });
  // }
  openDialog() {

    // const dialogRef = this.dialog.open(PopupComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = "550px";
    dialogConfig.data = {webUrl:''};
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
  navigate(path: string) {
    this.router.navigateByUrl(path);
  }
  scrollToTop(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.windowScrolled = true;
    } else {
      this.windowScrolled = false
    }

  }
}
