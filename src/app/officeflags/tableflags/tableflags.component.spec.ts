import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableflagsComponent } from './tableflags.component';

describe('TableflagsComponent', () => {
  let component: TableflagsComponent;
  let fixture: ComponentFixture<TableflagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableflagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableflagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
