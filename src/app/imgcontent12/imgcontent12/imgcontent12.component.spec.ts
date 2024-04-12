import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imgcontent12Component } from './imgcontent12.component';

describe('Imgcontent12Component', () => {
  let component: Imgcontent12Component;
  let fixture: ComponentFixture<Imgcontent12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imgcontent12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Imgcontent12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
