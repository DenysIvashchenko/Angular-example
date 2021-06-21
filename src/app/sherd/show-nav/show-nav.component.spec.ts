import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNavComponent } from './show-nav.component';

describe('ShowNavComponent', () => {
  let component: ShowNavComponent;
  let fixture: ComponentFixture<ShowNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
