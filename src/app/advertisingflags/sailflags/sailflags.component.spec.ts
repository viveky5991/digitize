import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SailflagsComponent } from './sailflags.component';

describe('SailflagsComponent', () => {
  let component: SailflagsComponent;
  let fixture: ComponentFixture<SailflagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SailflagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SailflagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
