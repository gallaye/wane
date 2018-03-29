import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatelogueComponent } from './catelogue.component';

describe('CatelogueComponent', () => {
  let component: CatelogueComponent;
  let fixture: ComponentFixture<CatelogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatelogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatelogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
