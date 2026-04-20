import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sedan } from './sedan';

describe('Sedan', () => {
  let component: Sedan;
  let fixture: ComponentFixture<Sedan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sedan],
    }).compileComponents();

    fixture = TestBed.createComponent(Sedan);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
