import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imgcontent8Component } from './imgcontent8.component';

describe('Imgcontent8Component', () => {
  let component: Imgcontent8Component;
  let fixture: ComponentFixture<Imgcontent8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imgcontent8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Imgcontent8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
