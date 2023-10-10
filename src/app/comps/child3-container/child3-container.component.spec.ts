import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child3ContainerComponent } from './child3-container.component';

describe('Child3ContainerComponent', () => {
  let component: Child3ContainerComponent;
  let fixture: ComponentFixture<Child3ContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Child3ContainerComponent]
    });
    fixture = TestBed.createComponent(Child3ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
