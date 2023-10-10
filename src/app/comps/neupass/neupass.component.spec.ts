import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeupassComponent } from './neupass.component';

describe('NeupassComponent', () => {
  let component: NeupassComponent;
  let fixture: ComponentFixture<NeupassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeupassComponent]
    });
    fixture = TestBed.createComponent(NeupassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
