import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imgcontent9Component } from './imgcontent9.component';

describe('Imgcontent9Component', () => {
  let component: Imgcontent9Component;
  let fixture: ComponentFixture<Imgcontent9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imgcontent9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Imgcontent9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
