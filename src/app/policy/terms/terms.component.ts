import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Animations } from '../../animation'; 

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.scss',
  animations: Animations
})

export class TermsComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
