import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleInputComponent } from './components/sample-input/sample-input.component';
import { SampleRadioGroupComponent } from './components/sample-radio-group/sample-radio-group.component';
import { SampleLabelComponent } from './components/sample-label/sample-label.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SampleButtonComponent } from './components/sample-button/sample-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleInputComponent,
    SampleRadioGroupComponent,
    SampleLabelComponent,
    SampleButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
