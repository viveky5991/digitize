import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfstandingsignageComponent } from './selfstandingsignage.component';

describe('SelfstandingsignageComponent', () => {
  let component: SelfstandingsignageComponent;
  let fixture: ComponentFixture<SelfstandingsignageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfstandingsignageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelfstandingsignageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
