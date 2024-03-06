import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditPlantComponent } from './page-edit-plant.component';

describe('PageEditPlantComponent', () => {
  let component: PageEditPlantComponent;
  let fixture: ComponentFixture<PageEditPlantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageEditPlantComponent]
    });
    fixture = TestBed.createComponent(PageEditPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
