import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
interface CounterItem {
  count: number;
  label: string;
  target: number;
  sign:string;
}
@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent  implements OnInit{
  // countItems: CounterItem[] = [
  //   { count: 0, label: 'Reward', target: 50 },
  //   { count: 0, label: 'Year+ Experience', target: 15 },
  //   { count: 0, label: 'Projects Completed', target: 2040 },
  //   { count: 0, label: 'Happy Clients', target: 1018 }
  // ];
  countItems: CounterItem[] = [
    { count: 0, label: 'CUSTOMERS', target: 12000,sign:"+" },
    { count: 0, label: 'TEAM MEMBERS', target: 130,sign:"+" },
    { count: 0, label: 'SUPPORT AVAILABLE', target: 12,sign:"HR" },
    { count: 0, label: 'CUP OF COFFEE', target: 265,sign:"+" },
    { count: 0, label: 'POSITIVE REVIEWS', target: 99,sign:"%" }
  ];
  constructor(){}
  ngOnInit(): void {
    this.startCounters()
  }

  // startCounter(): void {
  //   const countElements = document.querySelectorAll(".count");
  //   const countArray = Array.from(countElements);

  //   countArray.forEach(item => {
  //     let startNumber = 0;
  //     const targetNumber = parseInt(item.dataset.number || '0', 10); // Parse the dataset number as an integer

  //     const counterUp = () => {
  //       startNumber++;
  //       item.innerHTML = startNumber.toString();

  //       if (startNumber === targetNumber) {
  //         clearInterval(stop);
  //       }
  //     };

  //     const stop = setInterval(counterUp, 50);
  //   });
  // }
  startCounters(): void {
    this.countItems.forEach(item => {
      let startNumber = 0;

      const counterInterval = setInterval(() => {
        startNumber++;
        item.count = startNumber;

        if (startNumber === item.target) {
          clearInterval(counterInterval);
        }
      }, 50);
    });
  }
}
