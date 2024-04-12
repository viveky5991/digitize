import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imgcontent11Component } from './imgcontent11.component';

describe('Imgcontent11Component', () => {
  let component: Imgcontent11Component;
  let fixture: ComponentFixture<Imgcontent11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imgcontent11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Imgcontent11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
