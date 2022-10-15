import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomChunckJokeComponent } from './random-chunck-joke.component';

describe('RandomChunckJokeComponent', () => {
  let component: RandomChunckJokeComponent;
  let fixture: ComponentFixture<RandomChunckJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomChunckJokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomChunckJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
