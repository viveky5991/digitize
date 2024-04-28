import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imgcontent16Component } from './imgcontent16.component';

describe('Imgcontent16Component', () => {
  let component: Imgcontent16Component;
  let fixture: ComponentFixture<Imgcontent16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imgcontent16Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Imgcontent16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
