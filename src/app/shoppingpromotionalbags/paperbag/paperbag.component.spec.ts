import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperbagComponent } from './paperbag.component';

describe('PaperbagComponent', () => {
  let component: PaperbagComponent;
  let fixture: ComponentFixture<PaperbagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaperbagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaperbagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
