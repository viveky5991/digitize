import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightbookComponent } from './highlightbook.component';

describe('HighlightbookComponent', () => {
  let component: HighlightbookComponent;
  let fixture: ComponentFixture<HighlightbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightbookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
