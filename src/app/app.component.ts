import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularSamples'
  cities: string[] = ["New York", "Chicago", "Los Angeles"]
  mainForm: FormGroup = new FormBuilder().group({
    name: [null, [Validators.minLength(3), Validators.maxLength(10)]],
    city: [null, [Validators.required]],
  })

  submitForm(){

  }

  resetForm(){
    this.mainForm.reset()
  }
}
