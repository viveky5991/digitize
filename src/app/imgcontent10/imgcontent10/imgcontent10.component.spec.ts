import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imgcontent10Component } from './imgcontent10.component';

describe('Imgcontent10Component', () => {
  let component: Imgcontent10Component;
  let fixture: ComponentFixture<Imgcontent10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imgcontent10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Imgcontent10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
