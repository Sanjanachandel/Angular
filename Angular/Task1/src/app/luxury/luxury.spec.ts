import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Luxury } from './luxury';

describe('Luxury', () => {
  let component: Luxury;
  let fixture: ComponentFixture<Luxury>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Luxury],
    }).compileComponents();

    fixture = TestBed.createComponent(Luxury);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
