import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoughCarouselComponent } from './rough-carousel.component';

describe('RoughCarouselComponent', () => {
  let component: RoughCarouselComponent;
  let fixture: ComponentFixture<RoughCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoughCarouselComponent]
    });
    fixture = TestBed.createComponent(RoughCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
