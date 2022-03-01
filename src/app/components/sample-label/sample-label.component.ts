import { Component, Input, OnInit } from '@angular/core';
import { SampleBaseComponent } from '../sample-base-component';

@Component({
  selector: 'app-sample-label',
  templateUrl: './sample-label.component.html',
  styleUrls: ['./sample-label.component.scss']
})
export class SampleLabelComponent {
  @Input('label')
  labelText: string = '';

} 
