import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandromComponent } from './randrom.component';

describe('RandromComponent', () => {
  let component: RandromComponent;
  let fixture: ComponentFixture<RandromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
