import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imgcontent15Component } from './imgcontent15.component';

describe('Imgcontent5Component', () => {
  let component: Imgcontent15Component;
  let fixture: ComponentFixture<Imgcontent15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imgcontent15Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Imgcontent15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
