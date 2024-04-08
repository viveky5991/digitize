import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraffolyteComponent } from './traffolyte.component';

describe('TraffolyteComponent', () => {
  let component: TraffolyteComponent;
  let fixture: ComponentFixture<TraffolyteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraffolyteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraffolyteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
