import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewPlantComponent } from './page-new-plant.component';

describe('PageNewPlantComponent', () => {
  let component: PageNewPlantComponent;
  let fixture: ComponentFixture<PageNewPlantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNewPlantComponent]
    });
    fixture = TestBed.createComponent(PageNewPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
