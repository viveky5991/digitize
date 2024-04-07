import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleflagsComponent } from './poleflags.component';

describe('PoleflagsComponent', () => {
  let component: PoleflagsComponent;
  let fixture: ComponentFixture<PoleflagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoleflagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoleflagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
