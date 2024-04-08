import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Unlit3DsignageComponent } from './unlit3Dsignage.component';

describe('Unlit3DsignageComponent', () => {
  let component: Unlit3DsignageComponent;
  let fixture: ComponentFixture<Unlit3DsignageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Unlit3DsignageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Unlit3DsignageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
