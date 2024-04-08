import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoistingflagsComponent } from './hoistingflags.component';

describe('HoistingflagsComponent', () => {
  let component: HoistingflagsComponent;
  let fixture: ComponentFixture<HoistingflagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoistingflagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoistingflagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
