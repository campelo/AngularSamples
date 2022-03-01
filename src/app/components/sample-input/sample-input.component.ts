import { Component, ElementRef, forwardRef, Renderer2, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SampleBaseComponent } from '../sample-base-component';

@Component({
  selector: 'app-sample-input',
  templateUrl: './sample-input.component.html',
  styleUrls: ['./sample-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SampleInputComponent),
    multi: true
  }]
})
export class SampleInputComponent extends SampleBaseComponent {

  @ViewChild('sampleInput') sampleInput!: ElementRef;

  constructor(private renderer: Renderer2) {
    super();
  }

  public doReset(): void {
    if (this.sampleInput)
      this.renderer.setProperty(this.sampleInput?.nativeElement, 'value', '');
  }

} 