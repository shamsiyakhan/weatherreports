import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysweatherComponent } from './daysweather.component';

describe('DaysweatherComponent', () => {
  let component: DaysweatherComponent;
  let fixture: ComponentFixture<DaysweatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaysweatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
