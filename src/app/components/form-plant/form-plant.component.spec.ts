import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlantComponent } from './form-plant.component';

describe('FormPlantComponent', () => {
  let component: FormPlantComponent;
  let fixture: ComponentFixture<FormPlantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPlantComponent]
    });
    fixture = TestBed.createComponent(FormPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
