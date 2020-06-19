import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadThisMonthComponent } from './download-this-month.component';

describe('DownloadThisMonthComponent', () => {
  let component: DownloadThisMonthComponent;
  let fixture: ComponentFixture<DownloadThisMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadThisMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadThisMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
