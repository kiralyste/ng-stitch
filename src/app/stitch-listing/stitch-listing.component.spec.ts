import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StitchListingComponent } from './stitch-listing.component';

describe('StitchListingComponent', () => {
  let component: StitchListingComponent;
  let fixture: ComponentFixture<StitchListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StitchListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StitchListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
