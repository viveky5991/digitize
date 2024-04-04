import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowvinylletteringComponent } from './windowvinyllettering.component';

describe('WindowvinylletteringComponent', () => {
  let component: WindowvinylletteringComponent;
  let fixture: ComponentFixture<WindowvinylletteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowvinylletteringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WindowvinylletteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
