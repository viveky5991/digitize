import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imgcontent5Component } from './imgcontent5.component';

describe('Imgcontent5Component', () => {
  let component: Imgcontent5Component;
  let fixture: ComponentFixture<Imgcontent5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imgcontent5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Imgcontent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
