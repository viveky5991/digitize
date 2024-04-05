import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutfrostedstickerComponent } from './cutfrostedsticker.component';

describe('CutfrostedstickerComponent', () => {
  let component: CutfrostedstickerComponent;
  let fixture: ComponentFixture<CutfrostedstickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CutfrostedstickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CutfrostedstickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
