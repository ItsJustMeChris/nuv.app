import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuoToneCardComponent } from './duo-tone-card.component';

describe('DuoToneCardComponent', () => {
  let component: DuoToneCardComponent;
  let fixture: ComponentFixture<DuoToneCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuoToneCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuoToneCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
