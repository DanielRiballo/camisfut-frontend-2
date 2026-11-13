import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnviosExpress } from './envios-express';

describe('EnviosExpress', () => {
  let component: EnviosExpress;
  let fixture: ComponentFixture<EnviosExpress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnviosExpress],
    }).compileComponents();

    fixture = TestBed.createComponent(EnviosExpress);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
