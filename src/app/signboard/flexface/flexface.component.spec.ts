import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexfaceComponent } from './flexface.component';

describe('FlexfaceComponent', () => {
  let component: FlexfaceComponent;
  let fixture: ComponentFixture<FlexfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexfaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlexfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
