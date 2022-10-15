import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollnoComponent } from './rollno.component';

describe('RollnoComponent', () => {
  let component: RollnoComponent;
  let fixture: ComponentFixture<RollnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RollnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
