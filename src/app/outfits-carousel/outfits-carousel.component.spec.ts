import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutfitsCarouselComponent } from './outfits-carousel.component';

describe('OutfitsCarouselComponent', () => {
  let component: OutfitsCarouselComponent;
  let fixture: ComponentFixture<OutfitsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutfitsCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
