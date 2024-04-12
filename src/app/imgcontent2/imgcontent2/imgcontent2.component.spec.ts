import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imgcontent2Component } from './imgcontent2.component';

describe('Imgcontent2Component', () => {
  let component: Imgcontent2Component;
  let fixture: ComponentFixture<Imgcontent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imgcontent2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Imgcontent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
