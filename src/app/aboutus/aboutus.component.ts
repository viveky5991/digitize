import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

interface CounterItem {
  count: number;
  label: string;
  target: number;
  sign: string;
}

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutusComponent implements OnInit {
  countItems: CounterItem[] = [
    { count: 0, label: 'CUSTOMERS', target: 12000, sign: "+" },
    { count: 0, label: 'TEAM MEMBERS', target: 130, sign: "+" },
    { count: 0, label: 'SUPPORT AVAILABLE', target: 12, sign: "HR" },
    { count: 0, label: 'CUP OF COFFEE', target: 265, sign: "+" },
    { count: 0, label: 'POSITIVE REVIEWS', target: 99, sign: "%" }
  ];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.startCounters();
  }

  startCounters(): void {
    const updateCounter = (index: number) => {
      const item = this.countItems[index];
      let current = 0;

      const step = () => {
        current++;
        item.count = current;
        this.cdr.markForCheck(); // Trigger change detection for OnPush

        if (current < item.target) {
          requestAnimationFrame(step);
        }
      };

      // Staggered start by 100ms per counter
      setTimeout(() => {
        requestAnimationFrame(step);
      }, index * 100);
    };

    // Start counters for all items
    this.countItems.forEach((_, index) => {
      updateCounter(index);
    });
  }
}
