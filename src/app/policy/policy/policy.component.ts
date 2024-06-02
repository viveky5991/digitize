import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Animations } from '../../animation';

@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.scss',
  animations: Animations
})
export class PolicyComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
