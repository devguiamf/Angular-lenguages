import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlemaoComponent } from './alemao.component';

describe('AlemaoComponent', () => {
  let component: AlemaoComponent;
  let fixture: ComponentFixture<AlemaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlemaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlemaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
