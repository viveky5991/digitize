import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imgcontent13Component } from './imgcontent13.component';

describe('Imgcontent13Component', () => {
  let component: Imgcontent13Component;
  let fixture: ComponentFixture<Imgcontent13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imgcontent13Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Imgcontent13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
