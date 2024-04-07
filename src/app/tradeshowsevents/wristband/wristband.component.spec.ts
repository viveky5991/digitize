import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WristbandComponent } from './wristband.component';

describe('WristbandComponent', () => {
  let component: WristbandComponent;
  let fixture: ComponentFixture<WristbandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WristbandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WristbandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
