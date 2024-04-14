import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imgcontent14Component } from './imgcontent14.component';

describe('Imgcontent14Component', () => {
  let component: Imgcontent14Component;
  let fixture: ComponentFixture<Imgcontent14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imgcontent14Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Imgcontent14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
