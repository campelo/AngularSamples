import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { dateMax, dateMin } from './validators/date.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularSamples'
  cities: string[] = ["New York", "Chicago", "Los Angeles"]
  maxDate = moment().add(1, 'years').toDate()
  minDate = moment().subtract(1, 'years').toDate()

  mainForm: FormGroup = new FormBuilder().group({
    name: [null, [Validators.minLength(3), Validators.maxLength(10)]],
    city: [null, [Validators.required]],
    dateSample: [moment().toDate(), [Validators.required, dateMax(this.maxDate), dateMin(this.minDate)]],
  })

  submitForm() {

  }

  resetForm() {
    this.mainForm.reset()
  }
}
