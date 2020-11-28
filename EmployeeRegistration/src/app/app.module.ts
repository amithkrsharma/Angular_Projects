import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenRegistrationFormComponent } from './component/template-driven-registration-form/template-driven-registration-form.component';
import { FormsModule } from '@angular/forms';
import { ConfirmEqualValidatorDirective } from './directive/confirm-equal-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenRegistrationFormComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
