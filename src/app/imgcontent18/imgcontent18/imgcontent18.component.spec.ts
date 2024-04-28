import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imgcontent18Component } from './imgcontent18.component';

describe('Imgcontent18Component', () => {
  let component: Imgcontent18Component;
  let fixture: ComponentFixture<Imgcontent18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imgcontent18Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Imgcontent18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
