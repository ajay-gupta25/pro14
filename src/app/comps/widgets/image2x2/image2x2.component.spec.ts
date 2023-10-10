import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Image2x2Component } from './image2x2.component';

describe('Image2x2Component', () => {
  let component: Image2x2Component;
  let fixture: ComponentFixture<Image2x2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Image2x2Component]
    });
    fixture = TestBed.createComponent(Image2x2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
