import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompsInteractionComponent } from './comps-interaction.component';

describe('CompsInteractionComponent', () => {
  let component: CompsInteractionComponent;
  let fixture: ComponentFixture<CompsInteractionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompsInteractionComponent]
    });
    fixture = TestBed.createComponent(CompsInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
