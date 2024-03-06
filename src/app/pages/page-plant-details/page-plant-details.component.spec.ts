import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePlantDetailsComponent } from './page-plant-details.component';

describe('PagePlantDetailsComponent', () => {
  let component: PagePlantDetailsComponent;
  let fixture: ComponentFixture<PagePlantDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePlantDetailsComponent]
    });
    fixture = TestBed.createComponent(PagePlantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
