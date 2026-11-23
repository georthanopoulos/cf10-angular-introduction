import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ste6WelcomeRouting } from './ste6-welcome-routing';

describe('Ste6WelcomeRouting', () => {
  let component: Ste6WelcomeRouting;
  let fixture: ComponentFixture<Ste6WelcomeRouting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ste6WelcomeRouting],
    }).compileComponents();

    fixture = TestBed.createComponent(Ste6WelcomeRouting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
