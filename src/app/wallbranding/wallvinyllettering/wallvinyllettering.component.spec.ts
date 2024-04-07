import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallvinylletteringComponent } from './wallvinyllettering.component';

describe('WallvinylletteringComponent', () => {
  let component: WallvinylletteringComponent;
  let fixture: ComponentFixture<WallvinylletteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WallvinylletteringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WallvinylletteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
