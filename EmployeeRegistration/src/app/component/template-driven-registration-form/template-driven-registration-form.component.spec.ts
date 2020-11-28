import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenRegistrationFormComponent } from './template-driven-registration-form.component';

describe('TemplateDrivenRegistrationFormComponent', () => {
  let component: TemplateDrivenRegistrationFormComponent;
  let fixture: ComponentFixture<TemplateDrivenRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenRegistrationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
