import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imgcontent4Component } from './imgcontent4.component';

describe('Imgcontent4Component', () => {
  let component: Imgcontent4Component;
  let fixture: ComponentFixture<Imgcontent4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imgcontent4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Imgcontent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
