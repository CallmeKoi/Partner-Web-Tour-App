import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsPerformComponent } from './bs-perform.component';

describe('BsPerformComponent', () => {
  let component: BsPerformComponent;
  let fixture: ComponentFixture<BsPerformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsPerformComponent]
    });
    fixture = TestBed.createComponent(BsPerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
