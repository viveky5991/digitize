import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imgcontent7Component } from './imgcontent7.component';

describe('Imgcontent7Component', () => {
  let component: Imgcontent7Component;
  let fixture: ComponentFixture<Imgcontent7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imgcontent7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Imgcontent7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
