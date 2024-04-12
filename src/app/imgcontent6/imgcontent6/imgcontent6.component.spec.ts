import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imgcontent6Component } from './imgcontent6.component';

describe('Imgcontent6Component', () => {
  let component: Imgcontent6Component;
  let fixture: ComponentFixture<Imgcontent6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imgcontent6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Imgcontent6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
