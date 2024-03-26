import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfinkComponent } from './selfink.component';

describe('SelfinkComponent', () => {
  let component: SelfinkComponent;
  let fixture: ComponentFixture<SelfinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelfinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
