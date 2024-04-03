import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieCutStickerComponent } from './die-cut-sticker.component';

describe('DieCutStickerComponent', () => {
  let component: DieCutStickerComponent;
  let fixture: ComponentFixture<DieCutStickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DieCutStickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DieCutStickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
