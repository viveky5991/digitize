import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imgcontent3Component } from './imgcontent3.component';

describe('Imgcontent3Component', () => {
  let component: Imgcontent3Component;
  let fixture: ComponentFixture<Imgcontent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imgcontent3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Imgcontent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
