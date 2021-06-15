import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelViewComponent } from './hotelview.component';

describe('HotelviewComponent', () => {
  let component: HotelViewComponent;
  let fixture: ComponentFixture<HotelViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
