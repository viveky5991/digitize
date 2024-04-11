import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imgcontent1Component } from './imgcontent1.component';

describe('Imgcontent1Component', () => {
  let component: Imgcontent1Component;
  let fixture: ComponentFixture<Imgcontent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imgcontent1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Imgcontent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
