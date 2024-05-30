import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideterminalComponent } from './sideterminal.component';

describe('SideterminalComponent', () => {
  let component: SideterminalComponent;
  let fixture: ComponentFixture<SideterminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideterminalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideterminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
