import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannercontentComponent } from './bannercontent.component';

describe('BannercontentComponent', () => {
  let component: BannercontentComponent;
  let fixture: ComponentFixture<BannercontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannercontentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannercontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
