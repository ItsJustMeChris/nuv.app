import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadThisMonthComponent } from './upload-this-month.component';

describe('UploadThisMonthComponent', () => {
  let component: UploadThisMonthComponent;
  let fixture: ComponentFixture<UploadThisMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadThisMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadThisMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
