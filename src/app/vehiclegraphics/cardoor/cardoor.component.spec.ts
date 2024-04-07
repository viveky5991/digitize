import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardoorComponent } from './cardoor.component';

describe('CardoorComponent', () => {
  let component: CardoorComponent;
  let fixture: ComponentFixture<CardoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardoorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
