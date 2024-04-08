import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexfacelightboxComponent } from './flexfacelightbox.component';

describe('FlexfacelightboxComponent', () => {
  let component: FlexfacelightboxComponent;
  let fixture: ComponentFixture<FlexfacelightboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexfacelightboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlexfacelightboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
