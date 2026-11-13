import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Equipaciones } from './equipaciones';

describe('Equipaciones', () => {
  let component: Equipaciones;
  let fixture: ComponentFixture<Equipaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Equipaciones],
    }).compileComponents();

    fixture = TestBed.createComponent(Equipaciones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
