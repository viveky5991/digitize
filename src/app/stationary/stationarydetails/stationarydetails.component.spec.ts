import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationarydetailsComponent } from './stationarydetails.component';

describe('StationarydetailsComponent', () => {
  let component: StationarydetailsComponent;
  let fixture: ComponentFixture<StationarydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationarydetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StationarydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
