import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../popup/popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
 
  constructor(public dialog: MatDialog,private router: Router) { }
  ngOnInit(): void {
    this.openDialog()
   }

  openDialog(){
    const dialogRef = this.dialog.open(PopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  navigate(path:string){
    this.router.navigateByUrl(path);
  }
}
