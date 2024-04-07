import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodenbackdropComponent } from './woodenbackdrop.component';

describe('WoodenbackdropComponent', () => {
  let component: WoodenbackdropComponent;
  let fixture: ComponentFixture<WoodenbackdropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WoodenbackdropComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WoodenbackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
