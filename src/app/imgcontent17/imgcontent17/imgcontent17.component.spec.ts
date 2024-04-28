import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imgcontent17Component } from './imgcontent17.component';

describe('Imgcontent17Component', () => {
  let component: Imgcontent17Component;
  let fixture: ComponentFixture<Imgcontent17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imgcontent17Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Imgcontent17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
