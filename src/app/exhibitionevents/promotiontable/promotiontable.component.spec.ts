import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotiontableComponent } from './promotiontable.component';

describe('PromotiontableComponent', () => {
  let component: PromotiontableComponent;
  let fixture: ComponentFixture<PromotiontableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromotiontableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromotiontableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
