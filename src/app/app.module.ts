import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleInputComponent } from './components/sample-input/sample-input.component';
import { SampleRadioGroupComponent } from './components/sample-radio-group/sample-radio-group.component';
import { SampleLabelComponent } from './components/sample-label/sample-label.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SampleButtonComponent } from './components/sample-button/sample-button.component';
import { SampleDateComponent } from './components/sample-date/sample-date.component';
import { HeaderDateSelectorComponent } from './components/header-date-selector/header-date-selector.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

const DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'l',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    SampleInputComponent,
    SampleRadioGroupComponent,
    SampleLabelComponent,
    SampleButtonComponent,
    SampleDateComponent,
    HeaderDateSelectorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: DATE_FORMATS,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
