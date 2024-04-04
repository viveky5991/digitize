import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplimentslipsComponent } from './complimentslips.component';

describe('ComplimentslipsComponent', () => {
  let component: ComplimentslipsComponent;
  let fixture: ComponentFixture<ComplimentslipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplimentslipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplimentslipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
