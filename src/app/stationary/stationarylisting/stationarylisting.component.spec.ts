import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationarylistingComponent } from './stationarylisting.component';

describe('StationarylistingComponent', () => {
  let component: StationarylistingComponent;
  let fixture: ComponentFixture<StationarylistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationarylistingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StationarylistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
