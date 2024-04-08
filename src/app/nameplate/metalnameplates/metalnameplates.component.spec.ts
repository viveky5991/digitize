import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalnameplatesComponent } from './metalnameplates.component';

describe('MetalnameplatesComponent', () => {
  let component: MetalnameplatesComponent;
  let fixture: ComponentFixture<MetalnameplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetalnameplatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetalnameplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
