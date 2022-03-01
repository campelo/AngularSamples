import { Component, ElementRef, forwardRef, Input, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SampleBaseComponent } from '../sample-base-component';

@Component({
  selector: 'app-sample-radio-group',
  templateUrl: './sample-radio-group.component.html',
  styleUrls: ['./sample-radio-group.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SampleRadioGroupComponent),
    multi: true
  }]
})
export class SampleRadioGroupComponent extends SampleBaseComponent {
  @Input() items: any[] = []
  @Input() groupName: string = ''

  @ViewChildren('sampleRadio') radios!: QueryList<ElementRef>

  constructor(private renderer: Renderer2) {
    super();
  }

  doReset(): void {
    this.radios?.forEach(r => this.renderer.setProperty(r?.nativeElement, 'checked', false))
  }
}
