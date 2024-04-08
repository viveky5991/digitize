import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarflagsComponent } from './carflags.component';

describe('CarflagsComponent', () => {
  let component: CarflagsComponent;
  let fixture: ComponentFixture<CarflagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarflagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarflagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
