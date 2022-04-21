import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SampleBaseComponent } from '../sample-base-component';
import { HeaderDateSelectorComponent } from '../header-date-selector/header-date-selector.component';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-sample-date',
  templateUrl: './sample-date.component.html',
  styleUrls: ['./sample-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SampleDateComponent),
      multi: true,
    },
  ]
})
export class SampleDateComponent extends SampleBaseComponent {
  
  headerDateComponent = HeaderDateSelectorComponent;
  @Input('max') dateMax: Date | undefined;
  @Input('min') dateMin: Date | undefined;
  @ViewChild('datePicker') date!: ElementRef;

  constructor(private utilsService: UtilsService) {
    super();
  }

  override onChangeValue(ev: any) {
    this.value = this.utilsService.tryParseToDate(ev?.target?.value)
    this.onChange(this.value);
  }

  public doReset(): void {
    this.value = undefined;
  }
}

