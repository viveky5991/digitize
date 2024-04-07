import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetallettersComponent } from './metalletters.component';

describe('MetallettersComponent', () => {
  let component: MetallettersComponent;
  let fixture: ComponentFixture<MetallettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetallettersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetallettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
